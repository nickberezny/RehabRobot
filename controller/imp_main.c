#include <stdlib.h>
#include <stdio.h>

#include <limits.h>
#include <pthread.h>
#include <sched.h>
#include <sys/mman.h>
#include <sys/time.h>
#include <time.h>
#include <stdbool.h>
#include <string.h>
#include <regex.h>

#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <poll.h>
#include <signal.h>

#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

#include <LabJackM.h> 

#include "include/imp_structures.h"
#include "include/LJM_Utilities.h"

#define DEBUG 1 //will print updates
#define BUFFER_SIZE 10 //size of data sturcture array
#define STRUCTURE_ELEMENTS 18 //number of elements in data structure
#define NSEC_IN_SEC 1000000000
#define STEP_NSEC 1000000 //control step time (1ms)
#define ENC_TO_MM 0.06096 //meters / encoder count (0.12192 m/rev, 2000 counts/rev ==> 0.06096 mm / rev )

/**********************************************************************
					   Global Variables
***********************************************************************/
int daqHandle; 
FILE * fp;
int listenfd = 0, connfd = 0;

pthread_mutex_t lock[BUFFER_SIZE]; 
struct impStruct * imp_cont;
struct impStruct * imp_cont_next;
struct impStruct * imp_log;
struct impStruct * imp_serve;

double Ad[4] = {0};
double Bd[2] = {0};

char recvBuff[1024];


/***********************************************************************
***********************************************************************/

int main(int argc, char* argv[]) {

    if(DEBUG) printf("Begin ... \n");

    int start_controller = 0;
    struct impStruct imp[BUFFER_SIZE + 1] = {0};

    struct regexMatch regex =
	{
		.SET = "SET",
		.P = "_P([0-9]*.[0-9]*)_",
		.D = "_D([0-9]*.[0-9]*)_",
		.xdes = "_xdes([0-9]*.[0-9]*)_"
	} ; //regex matches

	regex_t compiled;
	regmatch_t matches[2];
	char matchBuffer[100];



    /**********************************************************************
					   Initialize TCP Socket
	***********************************************************************/
		
    struct sockaddr_in serv_addr; 

    listenfd = socket(AF_INET, SOCK_STREAM, 0);
    memset(&serv_addr, '0', sizeof(serv_addr));
    
    serv_addr.sin_family = AF_INET;
    inet_pton(AF_INET, "127.0.0.1",  &serv_addr.sin_addr.s_addr);
    serv_addr.sin_port = htons(1337); 

    if(DEBUG) printf("Initialized Socket\n"); 

    /**********************************************************************
					  		 Initialize DAQ
	***********************************************************************/

    daqHandle = init_daq(daqHandle);
    double value = 0;
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(daqHandle, NAME, &value);

    LJM_eStreamStop(daqHandle); //stop any previous streams

    //start Quadrature counter on DIO2 and DIO3
    LJM_eWriteName(daqHandle, "DIO2_EF_ENABLE", 0);
    LJM_eWriteName(daqHandle, "DIO3_EF_ENABLE", 0);

    LJM_eWriteName(daqHandle, "DIO2_EF_INDEX", 10);
    LJM_eWriteName(daqHandle, "DIO3_EF_INDEX", 10);

    LJM_eWriteName(daqHandle, "DIO2_EF_ENABLE", 1);
    LJM_eWriteName(daqHandle, "DIO3_EF_ENABLE", 1);

    char * temp[6] = {"AIN0","AIN1","AIN2","FIO0","FIO1","DIO2_EF_READ_A_F_AND_RESET"};
    int temp2[6] = {1, 1, 1, 1, 1, 1};
    int temp3[6] = {LJM_WRITE, LJM_READ, LJM_READ, LJM_READ, LJM_READ, LJM_READ};

    imp[0].aNames[0] = *temp;
	imp[0].aNumValues[0] = *temp2;
	imp[0].aWrites[0] = *temp3;

  
    if(DEBUG) printf("Connected to LabJack %s = %f\n", NAME, value);


    /**********************************************************************
					  		 Initialize Data Log File 
	***********************************************************************/

    //get current date & time
    time_t rawtime;
	struct tm * timeinfo;

	time ( &rawtime );
	timeinfo = localtime ( &rawtime );
	char * data_file_name;
	data_file_name = asctime(timeinfo);
	int en = strlen(data_file_name);
	data_file_name[en-1] = '_';

	printf("%s\n", data_file_name);
	const char file_ext[] = "data.txt";
	strcat(data_file_name, file_ext);

	for(int i; i < strlen(data_file_name) - 1; i++)
	{
		if (isspace(data_file_name[i])) 
		    data_file_name[i]='_';
		if (data_file_name[i] == ':')
			data_file_name[i]='-';
	}

   //create file name (date&time_data.txt)
	printf("%s\n", data_file_name);

    fp = fopen ('test.txt','w');
    //fprintf (fp, "%s\n", asctime (timeinfo) ); 
    //fprintf (fp, "StepTime, x, v, f, xdes, vdes, fdes, cmd, IR, LSB, LSF\n"); //print header

    //if(DEBUG) printf("Created data file %s\n", data_file_name); 

    printf("1\n");

    /**********************************************************************
					   Initialize Mutexes
	***********************************************************************/

	

	for(int i = 0; i < BUFFER_SIZE; i++)
	{
		pthread_mutex_init(&lock[i], NULL); //init mutex locks
		struct imp *point = &(imp[i]); //allocate memory 
		point = (struct imp*)calloc(STRUCTURE_ELEMENTS,sizeof(imp[i])); 
	}
	
	
    /**********************************************************************
					   Initialize Threads & Memory Lock
	***********************************************************************/

	struct sched_param param[3];
    pthread_attr_t attr[3];
    pthread_t thread[3];

    //lock memory (no dynamic allocation beyond here)
    if(mlockall(MCL_CURRENT|MCL_FUTURE) == -1) {
       printf("mlockall failed: %m\n");
       return 0;
    }

    //initialize threads (do not start yet)
    for(int i = 0; i < 3; i++)
    {
    	init_thread(&attr[i], &param[i], 95-i);
    }

    /**********************************************************************
					   Wait for input 
	***********************************************************************/

    //start tcp socket
    bind(listenfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr)); 
    listen(listenfd, 100);

	//Start UI Process 
	system("gnome-terminal --working-directory=Documents/RehabRobot/server -e 'sudo node server.js'");


	while(1)
    {
		if(DEBUG) printf("Waiting for run signal from UI ... \n");

		//wait for game settings
		connfd = accept(listenfd, (struct sockaddr*)NULL, NULL); 
		if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'S')
		{
			//recieved settings 
			if(DEBUG) printf("recieved data: %s\n", recvBuff);
			start_controller = 1;

			regcomp(&compiled, regex.P, REG_EXTENDED);
			if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
				sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
				sscanf(matchBuffer, "%lf", &imp[0].P);
			    if(DEBUG) { printf("P gain is: %lf\n", imp[0].P); }
			}

			regcomp(&compiled, regex.D, REG_EXTENDED);
			if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
				sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
				sscanf(matchBuffer, "%lf", &imp[0].D);
			    if(DEBUG) { printf("D gain is: %f\n", imp[0].D); }
			}

			regcomp(&compiled, regex.xdes, REG_EXTENDED);
			if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
				sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
				sscanf(matchBuffer, "%lf", &imp[0].xdes);
			    if(DEBUG) { printf("xdes is: %f\n", imp[0].xdes); }
			}
			

			for(int i = 1; i < BUFFER_SIZE; i++)
			{
				imp[i].P = imp[0].P;
				imp[i].D = imp[0].D;
				imp[i].xdes = imp[0].xdes;
				imp[i].aNames[0] = imp[0].aNames; 
				imp[i].aNumValues[0] = imp[0].aNumValues;
				imp[i].aWrites[0] = imp[0].aWrites;
						
			}

			if(DEBUG) printf("Set All Parameters...\n");
		}

		//wait for run signal before starting controller
		if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'R' && start_controller == 1)
		{
			//everything set, begin therapy 
			if(DEBUG) printf("Start signal recieved \n");
			break;
		}

		close(connfd);
		sleep(0.01);
    }


    /**********************************************************************
					   	Calculate Ad, Bd
	***********************************************************************/

    //descrete state space for admittance control (x(k+1) = Ad*x(k) + Bd*u(k))
    //Ad = {{1.0, imp->Ts},{-imp->Ts * imp->k/imp->m, 1.0 - imp.Ts * imp->Bd/imp->m}};
    //Bd = {0.0, 1.0/imp->m}


    /**********************************************************************
					   	Create and join threads
	***********************************************************************/
    
    if(DEBUG) printf("Joining Threads ...\n"); 

	//create and join threads 
	pthread_create(&thread[0], &attr[0], controller, (void *)imp);
	pthread_create(&thread[1], &attr[1], server, (void *)imp);
	pthread_create(&thread[2], &attr[2], logger, (void *)imp);
    pthread_join(thread[0], NULL);
	pthread_join(thread[1], NULL);
	pthread_join(thread[2], NULL);
	
	//finished sessions, begin shutdown
	LJM_Close(daqHandle);
	fclose(fp);
    if(DEBUG) printf("Finished, terminating program... \n");

	return 0;

}



/**********************************************************************
				   	Thread 1: Controller 
***********************************************************************/

void *controller(void * d)
{
	if(DEBUG) printf("Thread 1 (controller) initializing ...\n");
	pthread_mutex_lock(&lock[0]);
	pthread_mutex_lock(&lock[1]);

	
	//setup for first time step
	imp_cont_next = &((struct impStruct*)d)[0];

	printf("2\n");
	clock_gettime(CLOCK_MONOTONIC, &(imp_cont_next->start_time)); 
	//LJM_eNames(daqHandle, 6, imp_cont->aNames, imp_cont->aWrites, imp_cont->aNumValues, imp_cont->aValues, &imp_cont->errorAddress);

	printf("3\n");
	imp_cont_next->fk = imp_cont_next->aValues[1];
    imp_cont_next->IR = imp_cont_next->aValues[2];
    imp_cont_next->LSF[0] = imp_cont_next->aValues[3];
    imp_cont_next->LSB[0] = imp_cont_next->aValues[4];
    imp_cont_next->xk = imp_cont_next->xk + ENC_TO_MM * imp_cont_next->aValues[5];
    printf("1\n");

    //CONTROL LOOP -------------------------------------------------
	while(1){
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			if(DEBUG & i == 0) printf("Thread 1 (controller) Executing ...\n");
			imp_cont = imp_cont_next;
			imp_cont_next = &((struct impStruct*)d)[i+1];

			//Calculate Velocity 
			//imp_cont->vk = imp_cont->xk / imp_cont->

			//PD Control
			imp_cont->cmd = imp_cont->P * (imp_cont->xk - imp_cont->xdes) + imp_cont->D * (imp_cont->vk - imp_cont->vdes);
			

			//check Limit Switches and IR
			//TODO : check direction of command
			//TODO : check IR
			if(imp_cont->LSF[1] && !imp_cont->LSF[0] && imp_cont->cmd > 0) { imp_cont->cmd = 0; }
			if(imp_cont->LSF[1] && !imp_cont->LSF[0] && imp_cont->cmd < 0) { imp_cont->cmd = 0; }

			
			imp_cont->aValues[0] = imp_cont->cmd;
			//Read & Write to DAQ ---------------------------------------
			//LJM_eNames(daqHandle, 6, imp_cont->aNames, imp_cont->aWrites, imp_cont->aNumValues, imp_cont->aValues, &imp_cont->errorAddress);
     	/*
	        imp_cont_next->fk = imp_cont->aValues[1];
	        imp_cont_next->IR = imp_cont->aValues[2];
	        imp_cont_next->LSF[0] = imp_cont->LSF[1];
	        imp_cont_next->LSB[0] = imp_cont->LSF[1];
	        imp_cont_next->LSF[1] = imp_cont->aValues[3];
	        imp_cont_next->LSB[1] = imp_cont->aValues[4];
	        imp_cont_next->xk = imp_cont->xk + ENC_TO_MM * imp_cont->aValues[5];
*/
	      	 //TIME -----------------------------------------------------

	        clock_gettime(CLOCK_MONOTONIC, &imp_cont->end_time); 

	        imp_cont->step_time.tv_sec = imp_cont->end_time.tv_sec - imp_cont->start_time.tv_sec;
	        imp_cont->step_time.tv_nsec = imp_cont->end_time.tv_nsec - imp_cont->start_time.tv_nsec;

	        if ( imp_cont->step_time.tv_sec > 0 && imp_cont->step_time.tv_nsec <= 0)
	        {
	            imp_cont->step_time.tv_sec = 0;
	            imp_cont->step_time.tv_nsec = NSEC_IN_SEC + imp_cont->step_time.tv_nsec;
	        }
	       
	        int wait_time = STEP_NSEC - imp_cont->step_time.tv_nsec;

	        //calculate time for next step
	        if(wait_time > 0)
	        {
	            if(imp_cont->end_time.tv_nsec + wait_time > NSEC_IN_SEC)
	            {
	                imp_cont->end_time.tv_nsec = wait_time - (NSEC_IN_SEC - imp_cont->end_time.tv_nsec);
	                imp_cont->end_time.tv_sec += 1.0; 
	            }
	            else 
	            {
	                imp_cont->end_time.tv_nsec += wait_time;
	            }


	            clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &imp_cont->end_time, NULL); //sleep until next step
	        }

	        clock_gettime(CLOCK_MONOTONIC, &imp_cont_next->start_time);
	        imp_cont->step_time.tv_sec = imp_cont->start_time.tv_sec - imp_cont_next->start_time.tv_sec; 
	        imp_cont->step_time.tv_nsec = imp_cont->start_time.tv_nsec - imp_cont_next->start_time.tv_nsec; 

	        //unlock current, lock next mutex
			if(i == BUFFER_SIZE - 2) { pthread_mutex_lock(&lock[0]); }
			else { pthread_mutex_lock(&lock[i+2]); }
			pthread_mutex_unlock(&lock[i]);	
	        
			}
	}
	return NULL;
}


/**********************************************************************
				   	Thread 2: Comm Server 
***********************************************************************/

void *server(void* d)
{
	imp_serve = &((struct impStruct*)d)[BUFFER_SIZE]; //get socket data

	while(1)
	{
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			pthread_mutex_lock(&lock[i]);
			if(DEBUG & i == 0) printf("Thread 2 (server) Executing ...\n");
			imp_serve = &((struct impStruct*)d)[i];

			pthread_mutex_unlock(&lock[i]);	
		}

	}

	return NULL;
}



/**********************************************************************
				   	Thread 3: Logging Server
***********************************************************************/

void *logger(void * d)
{
	while(1){
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			pthread_mutex_lock(&lock[i]);
			if(DEBUG & i == 0) printf("Thread 3 (logging) Executing ...\n");
			imp_log = &((struct impStruct*)d)[i];

			fprintf (fp, "%.5f, %.2f, %.2f, %.2f, %.2f, %.2f, %.2f, %.2f, %.2f, %d, %d\n", 
				imp_log->step_time.tv_nsec, imp_log->xk, imp_log->vk, imp_log->fk, 
				imp_log->xdes, imp_log->vdes, imp_log->fdes, imp_log->cmd, imp_log->IR, imp_log->LSB, imp_log->LSF); 
			
			pthread_mutex_unlock(&lock[i]);
		}
	}
	
	return NULL;

}


