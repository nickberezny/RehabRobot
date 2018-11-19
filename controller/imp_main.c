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
//TODO -- CHANGE:
#define ENC_TO_M 2000 //meters / encoder count

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




/***********************************************************************
***********************************************************************/

int main(int argc, char* argv[]) {
 
    if(DEBUG) printf("begin \n");

    int start_controller = 0;

    /**********************************************************************
					   Initialize TCP Socket
	***********************************************************************/
		
    struct serv_addr; 

    listenfd = socket(AF_INET, SOCK_STREAM, 0);
    memset(&serv_addr, '0', sizeof(serv_addr));
    
    serv_addr.sin_family = AF_INET;
    inet_pton(AF_INET, "127.0.0.1",  &serv_addr.sin_addr.s_addr);
    serv_addr.sin_port = htons(1337); 

    bind(listenfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr)); 
    listen(listenfd, 10);

    if(DEBUG) printf("Initialized Socket\n"); 

    /**********************************************************************
					  		 Initialize DAQ
	***********************************************************************/

    daqHandle = init_daq(daqHandle);
    double value = 0;
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(daqHandle, NAME, &value);

    LJM_eStreamStop(handle); //stop any previous streams

    //start Quadrature counter on DIO2 and DIO3
    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 0);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 0);

    LJM_eWriteName(handle, "DIO2_EF_INDEX", 10);
    LJM_eWriteName(handle, "DIO3_EF_INDEX", 10);

    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 1);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 1);

    const char * aNames[6] = {"AIN0","AIN1","AIN2","FIO0","FIO1","DIO2_EF_READ_A_F_AND_RESET"};
    int aWrites[6] = {LJM_WRITE, LJM_READ, LJM_READ, LJM_READ, LJM_READ, LJM_READ};
    int aNumValues[6] = {1, 1, 1, 1, 1, 1};
    double aValues[6];
    int errorAddress;
  
    if(DEBUG) printf("Connected to LabJack %s = %f\n", NAME, value);


    /**********************************************************************
					  		 Initialize Data Log File 
	***********************************************************************/

    //get current date & time
    time_t rawtime;
	struct tm * timeinfo;

	time ( &rawtime );
	timeinfo = localtime ( &rawtime );
	char data_file_name[100] = asctime(timeinfo);
	const char file_ext[] = "_data.txt"
	strcat(data_file_name, file_ext); //create file name (date&time_data.txt)

    fp = fopen (data_file_name,"w");
    fprintf (fp, "%s", asctime (timeinfo) ); 
    fprintf (fp, "Seconds, Nanoseconds, Iterations, Iterations Squared\n"); //print header

    if(DEBUG) printf("Created data file %s\n", data_file_name); 


    /**********************************************************************
					   Initialize Mutexes
	***********************************************************************/

	struct impStruct imp[BUFFER_SIZE + 1] = {0};

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

	//Start UI Process 
	system("gnome-terminal --working-directory=Documents/UI -e 'node server'");


	while(1)
    {
		if(DEBUG) printf("Waiting for run signal from UI ... \n");

		//wait for game settings
		connfd = accept(listenfd, (struct sockaddr*)NULL, NULL); 
		if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'r')
		{
			//recieved settings 
			if(DEBUG) printf("recieved data: %s\n", recvBuff);
			start_controller = 1;
		}

		//wait for run signal before starting controller
		if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'r' && start_controller == 1)
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
    Ad = {{1.0, imp->Ts},{-imp->Ts * imp->k/imp->m, 1.0 - imp.Ts * imp->Bd/imp->m}};
    Bd = {0.0, 1.0/imp->m}


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
    if(DEBUG) printf("Done \n");

	return 0;

}



/**********************************************************************
				   	Thread 1: Controller 
***********************************************************************/

void *controller(void * d)
{
	
	pthread_mutex_lock(&lock[0]);
	pthread_mutex_lock(&lock[1]);

	//setup for first time step
	imp_cont_next = &((struct impStruct*)d)[0];

	clock_gettime(CLOCK_MONOTONIC, imp_cont_next.start_time); 
	LJM_eNames(handle, 6, aNames, aWrites, aNumValues, aValues, &errorAddress);

	imp_cont_next.fk = aValues[1];
    imp_cont_next.IR = aValues[2];
    imp_cont_next.LSF = aValues[3];
    imp_cont_next.LSB = aValues[4];
    imp_cont_next.xk = imp_cont.xk + ENC_TO_M * aValues[5];


    //CONTROL LOOP -------------------------------------------------
	while(1){
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			if(DEBUG & i == 0) printf("Thread 1 (controller) Executing ...\n");
			imp_cont = imp_cont_next;
			imp_cont_next = &((struct impStruct*)d)[i+1];

			//PD Control
			imp_cont->cmd = imp_cont->P * (imp_cont->xk - imp_cont->xdes) + imp_cont->D * (imp_cont->vk - imp_cont->vdes);
			aValues[0] = imp_cont->cmd;
			

			//Read & Write to DAQ ---------------------------------------
			LJM_eNames(handle, 6, aNames, aWrites, aNumValues, aValues, &errorAddress);
     
	        imp_cont_next->fk = aValues[1];
	        imp_cont_next->IR = aValues[2];
	        imp_cont_next.LSF[2] = aValues[3];
	        imp_cont_next.LSB[1] = aValues[4];
	        imp_cont_next->xk = imp_cont.xk + ENC_TO_M * aValues[5];

	      	 //TIME -----------------------------------------------------

	        clock_gettime(CLOCK_MONOTONIC, imp_cont.end_time); 

	        imp_cont->step_time.tv_sec = imp_cont->end_time.tv_sec - imp_cont->start_time.tv_sec;
	        imp_cont->step_time.tv_nsec = imp_cont->end_time.tv_nsec - imp_cont->start_time.tv_nsec;

	        if (delta_time.tv_sec > 0 && imp_cont->step_time.tv_nsec =< 0)
	        {
	            imp_cont->step_time.tv_sec = 0;
	            imp_cont->step_time.tv_nsec = NSEC_IN_SEC + imp_cont->step_time.tv_nsec;
	        }
	       
	        wait_time = STEP_NSEC - imp_cont->step_time.tv_nsec;

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

	        clock_gettime(CLOCK_MONOTONIC, imp_cont_next.start_time);
	        imp_cont->step_time = imp_cont->start_time - imp_cont_next->start_time; 

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
	imp_sock = &((struct impStruct*)d)[BUFFER_SIZE]; //get socket data

	while(1)
	{
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			pthread_mutex_lock(&lock[i]);
			if(DEBUG & i == 0) printf("Thread 2 (server) Executing ...\n");
			imp_serve = &((struct impStruct*)d)[i];

			pthread_mutex_unlock(&lock[i]);	

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
				imp_log.step_time.tv_nsec, imp_log.xk, imp_log.vk, imp_log.fk, 
				imp_log.xdes, imp_log.vdes, imp_log.fdes, imp_log.cmd, imp_log.IR, imp_log.LSB, imp_log.LSF); 
			
			pthread_mutex_unlock(&lock[i]);
		}
	}
	
	return NULL;
}


