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

#include <LabJackM.h> //DAQ library

#include "include/imp_structures.h"
#include "include/LJM_Utilities.h"

#define BUFFER_SIZE 10
#define DEBUG 1
#define STEP_NSEC 10000000
#define POLLING_TIMEOUT_SEC 1

double next_position[BUFFER_SIZE];
pthread_mutex_t lock[BUFFER_SIZE];
struct timespec last_time; 

//init structures for threads
struct impStruct * imp_cont;
struct impStruct * imp_log;
struct impStruct * imp_sock;
struct impStruct * imp_serve;
struct impStruct * imp_file;

struct game_data game_data;

//buffer for socket 
char sendBuff[200]; 
char fileBuff[500];

//polling timeout 
struct timeval tv;

//handle for reading from labjack DAQ
int daqHandle; 

size_t json_length;

double k;
double b;

int main(int argc, char* argv[]) {
 
    if(DEBUG) printf("begin \n");

/**********************************************************************
				   Initialize Mutexes
***********************************************************************/

    int start_controller = 0;
	struct impStruct imp[BUFFER_SIZE + 1] = {0};

	for(int i = 0; i < BUFFER_SIZE; i++)
	{
		pthread_mutex_init(&lock[i], NULL); //init mutex locks
		struct imp *point = &(imp[i]); 
		point = (struct imp*)calloc(12,sizeof(imp[i])); //allocate memory 
	}
	
	struct sched_param param[3];
    pthread_attr_t attr[3];
    pthread_t thread[3];

    //timeout for server polling
    tv.tv_sec = POLLING_TIMEOUT_SEC; 

	//TODO : get custom file name
	char * filename = "001";
	snprintf(fileBuff, sizeof(fileBuff), "LOG_%s.txt", filename);
	init_log(fileBuff);

    //create socket to connect to socket server 
    //init_sock(&(imp[BUFFER_SIZE].socket_data));

/**********************************************************************
				  		 Initialize DAQ
***********************************************************************/

    //connect to DAQ
    daqHandle = init_daq(daqHandle);
    double value = 0;
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(daqHandle, NAME, &value);
  
    if(DEBUG) printf("Connected to LabJack %s = %f\n", NAME, value); 

    //init json conversion
    //json_length = length_json(imp);

/**********************************************************************
				   Initialize Threads & Memory Lock
***********************************************************************/

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
				   Initialize TCP Socket
***********************************************************************/
	
	int listenfd = 0, connfd = 0;
    struct sockaddr_in serv_addr; 

    listenfd = socket(AF_INET, SOCK_STREAM, 0);
    memset(&serv_addr, '0', sizeof(serv_addr));
    
    serv_addr.sin_family = AF_INET;
    inet_pton(AF_INET, "127.0.0.1",  &serv_addr.sin_addr.s_addr);
    serv_addr.sin_port = htons(3000); 

    char recvBuff[1024];

    bind(listenfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr)); 
    listen(listenfd, 100000);

/**********************************************************************
				   Wait for input 
***********************************************************************/

//Start UI Process 
system("gnome-terminal --working-directory=Documents/UI -e 'node server'");

//system("gnome-terminal -e 'echo ""abl123"" | sudo -S'");
//system("gnome-terminal -e 'echo abl123 | sudo -S mongod --dbpath /data'"); //start mongodb database service

    while(1)
    {
    	if(DEBUG) printf("waiting for run signal ... \n");
        connfd = accept(listenfd, (struct sockaddr*)NULL, NULL); 

        //wait for game settings
        if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'r')
        {

        	if(DEBUG) printf("recieved data: %s\n", recvBuff);
        	start_controller = 1;

			game_data.game = recvBuff[2] - '0';
			game_data.mode = recvBuff[3] - '0';
			game_data.intensity = recvBuff[4] - '0';

			if(DEBUG) printf("Game: %d \nMode: %d \nIntensity: %d \n", game_data.game, game_data.mode, game_data.intensity);

			k = 1 + game_data.intensity;
			b = 1 + game_data.intensity;

			//TODO: set appropriate controller / physics engine settings
        	
        	//write(connfd, 'done');
        }

         //wait for run signal before starting controller
        if(read(connfd, recvBuff, sizeof(recvBuff)) && recvBuff[0] == 'r' && start_controller == 1)
        {
        	//everything set, begin therapy 
        	break;
        }

    	close(connfd);
        sleep(0.01);
     }

/**********************************************************************
				   	Create and join threads
***********************************************************************/

	//create and join threads 
	pthread_create(&thread[0], &attr[0], controller, (void *)imp);
	pthread_create(&thread[1], &attr[1], server, (void *)imp);
	//pthread_create(&thread[2], &attr[2], logger, (void *)imp);
    pthread_join(thread[0], NULL);
	pthread_join(thread[1], NULL);
	//pthread_join(thread[2], NULL);

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
	if(DEBUG) printf("Thread 1 Executing ...\n");

	while(1){
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			
			imp_cont = &((struct impStruct*)d)[i];
			
			//TODO:
			//get data from DAQ
			//LJM_eReadName(daqHandle, "AIN0", data);
			
			//check for errors / stop

			/*
			if(mode == 1) { imp_simple_control(imp_cont, k, b); }
			
			*/
			
			//write to motor
			//LJM_eWriteName(daqHandle, "AIN1", data);

			imp_cont->x = i;
			next_position[i] = imp_cont->x; //set next position for socket server

			//calculate time for next step
			if(last_time.tv_nsec + STEP_NSEC > 1000000000)
			{
				last_time.tv_nsec = STEP_NSEC - (1000000000 - last_time.tv_nsec);
				last_time.tv_sec += 1.0; 
			}
			else 
			{
				last_time.tv_nsec += STEP_NSEC;
			}

			pthread_mutex_unlock(&lock[i]);
			
			//lock next element immediately to prevent server / logger from getting ahead
			if(i == BUFFER_SIZE - 1)
			{
				pthread_mutex_lock(&lock[0]);
			}
			else
			{
				pthread_mutex_lock(&lock[i+1]);
			}

			
	    	clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &last_time, NULL); //sleep until next step
	    	clock_gettime(CLOCK_MONOTONIC, &last_time); //reset time 
			

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
			imp_serve = &((struct impStruct*)d)[i];
			/*
			//send data to node server in json format
			connfd = accept(listenfd, (struct sockaddr*)NULL, NULL);
			struct_to_json(imp_serve, sendBuff, json_length);
			write(connfd, test_json, len); 
			close(confd);
			*/
			pthread_mutex_unlock(&lock[i]);
			
			sleep(0.05); //sleep until near the next time step (60Hz) **only affects this thread**
		}
	}

	return NULL;
}


/*
void *logger(void * d)
{
	while(1){
		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			pthread_mutex_lock(&lock[i]);

			//if(DEBUG) printf("Thread 3 executing ...\n");
			imp_log = &((struct impStruct*)d)[i];
			imp_file = &((struct impStruct*)d)[BUFFER_SIZE];		
			
			imp_file->logFile = fopen(fileBuff,"a");
			//TODO: Log all data to file
			fprintf(imp_file->logFile, "%f\n", imp_log->x);
			fclose(imp_file->logFile);
			
			pthread_mutex_unlock(&lock[i]);

		}
	}
	
	return NULL;
}

*/
