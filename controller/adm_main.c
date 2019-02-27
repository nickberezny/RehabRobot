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

#include "include/adm_structures.h"
#include "include/LJM_Utilities.h"

#include "include/adm_variables.h"

#define DEBUG 1 //will print updates
#define CONNECT_TO_UI 1
#define GET_PARAMS_FROM_UI 0 //will get params from remote UI (set 0 for testing, 1 for production)
#define MAX_COUNT 50999 //maximum iterations before shutdown (only on debug) 

#define BUFFER_SIZE 10 //size of data sturcture array
#define STRUCTURE_ELEMENTS 25 //number of elements in data structure

/**********************************************************************
					   Global Variables
***********************************************************************/

int adm_main(int argc, char* argv[])
{
	//allocate memory 
	for(int i = 0; i < BUFFER_SIZE; i++)
	{
		struct imp *point = &(imp[i]); //allocate memory 
		point = (struct imp*)calloc(STRUCTURE_ELEMENTS,sizeof(imp[i])); 
	}

	//create structure 
	struct admStrut * adm; 

	if(adm_init(adm) != 0) 			exit(EXIT_FAILURE);
	if(adm_communication(adm) != 0) exit(EXIT_FAILURE);
	if(adm_discretize(adm) != 0) 	exit(EXIT_FAILURE);
	if(adm_home(adm) != 0) 			exit(EXIT_FAILURE);
	if(adm_calibration(adm) != 0) 	exit(EXIT_FAILURE);
	if(adm_run(adm) != 0) 			exit(EXIT_FAILURE);
	if(adm_shutdown(adm) != 0) 		exit(EXIT_FAILURE);

	return 0;

}



/**********************************************************************
				   	Thread 1: Controller 
***********************************************************************/

void *controller(void * d)
{
	if(DEBUG) printf("Thread 1 (controller) initializing ...\n");
	pthread_mutex_lock(&lock[0]);

	aValues[0] = MOTOR_ZERO; 
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);

    //CONTROL LOOP -------------------------------------------------
	while(1){

		for(int i = 0; i < BUFFER_SIZE; i++)
		{
			clock_gettime(CLOCK_MONOTONIC, &temp_time); 

			imp_cont = &((struct impStruct*)d)[i];
			imp_cont->start_time = temp_time;

			if(DEBUG & i == 0) printf("Thread 1 (controller) Executing ...\n");

			//toggle watchdog output at each step
			if(aWrites[5] == 0.0) aWrites[5] = 5.0;
			else aWrites[5] = 0.0;

			//Read & Write to DAQ ---------------------------------------
			LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
				
	        imp_cont->fk = FT_GAIN*aValues[1] - ft_offset;
	        //printf("Force: %.2f\n", imp_cont->fk);
	        imp_cont->LSF[0] = imp_cont->LSF[1];
	        imp_cont->LSB[0] = imp_cont->LSB[1];
	        imp_cont->LSF[1] = aValues[2];
	        imp_cont->LSB[1] = aValues[3];
	        curr_pos = curr_pos + ENC_TO_MM * (double)aValues[4]; 
	        imp_cont->xk = curr_pos;

	        imp_cont->f_unfilt = imp_cont->fk;
	        imp_FIR(f_filt, &imp_cont->fk, &fir_order_f); //moving avg filter for force
			

			if(i==0) printf("Force: %.3f\n", imp_cont->fk);
			//Calculate Velocity 
	        imp_StepTime(&imp_cont->start_time, &last_time, &imp_cont->step_time);
			imp_cont->vk = ENC_TO_MM * aValues[4] / ((double)imp_cont->step_time.tv_sec + (double)imp_cont->step_time.tv_nsec/NSEC_IN_SEC);
			imp_cont->v_unfilt = imp_cont->vk;
			imp_FIR(v_filt, &imp_cont->vk, &fir_order_v); //moving average filter for velocity 

			//Controller
			imp_Adm(imp_cont, &xa, &va);
			//imp_traj(imp_cont, &direction);
			//imp_PD(imp_cont);	
			//imp_Force(imp_cont);	
			//Safety Checks
			//TODO : check direction of command
			//TODO : check IR
			if(imp_cont->cmd > MAX_COMMAND) imp_cont->cmd = MAX_COMMAND;
			if((-1)*imp_cont->cmd > MAX_COMMAND) imp_cont->cmd = (-1)*MAX_COMMAND;
			if(imp_cont->cmd > 0) imp_cont->cmd = MOTOR_ZERO_FWD - imp_cont->cmd;
			if(imp_cont->cmd < 0) imp_cont->cmd = MOTOR_ZERO_BWD - imp_cont->cmd;
			if(imp_cont->cmd == 0) imp_cont->cmd += MOTOR_ZERO;

			if(imp_cont->LSF[1] )
			{
			  	if(imp_cont->cmd < MOTOR_ZERO) imp_cont->cmd = MOTOR_ZERO; 
			  	direction = -1.0;		
			}
			if(imp_cont->LSB[1])  
			{
				if(imp_cont->cmd < MOTOR_ZERO) imp_cont->cmd = MOTOR_ZERO;  
				direction = 1.0;
			}
			if(imp_cont->fk > MAX_FORCE) imp_cont->cmd = MOTOR_ZERO; 

			//set motor command (written at beginning of next step on eNames())
			aValues[0] = imp_cont->cmd;
			if(DEBUG  & i==0) printf("Motor Command: %.2f\n", aValues[0]);

	        clock_gettime(CLOCK_MONOTONIC, &(imp_cont->end_time));
	        
	        imp_cont->wait_time = imp_cont->end_time;
	        last_time = imp_cont->start_time;
	        
	        imp_StepTime(&imp_cont->end_time, &imp_cont->start_time, &imp_cont->step_time);
	        imp_WaitTime(&imp_cont->step_time, &imp_cont->wait_time);

	        //unlock current, lock next mutex
			if(i == BUFFER_SIZE - 1) { pthread_mutex_lock(&lock[0]); }
			else { pthread_mutex_lock(&lock[i+1]); }
			pthread_mutex_unlock(&lock[i]);	
	        
			if(++temp_counter > MAX_COUNT) {
				pthread_mutex_unlock(&lock[0]);	
				printf("i %d count %d \n", i, temp_counter);
				LJM_eWriteName(daqHandle, "DAC0", MOTOR_ZERO);
				return;
			}
	       
	        clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &imp_cont->wait_time, NULL);

		}
	}

	LJM_eWriteName(daqHandle, "DAC0", MOTOR_ZERO);

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
			//if(DEBUG & i == 0) printf("Thread 2 (server) Executing ...\n");
			if(i == 0)
			{
				imp_serve = &((struct impStruct*)d)[i];
				sprintf(sendBuff,"%.2f,%.2f", imp_serve->xk,imp_serve->xdes);
				printf("%d\n", send(connfd, sendBuff, strlen(sendBuff), 0));
			}
			

			pthread_mutex_unlock(&lock[i]);	

		}
			
		if(temp_counter > MAX_COUNT) return;
		

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
			//if(DEBUG & i == 0) printf("Thread 3 (logging) Executing ...\n");
			imp_log = &((struct impStruct*)d)[i];

			fprintf (imp_log->fp, "%d, %d, %.3f, %.3f, %.3f, %.3f, %.3f, %.3f, %.3f, %.3f, %.3f, %.3f, %d, %d \n", 
				imp_log->start_time.tv_sec, imp_log->start_time.tv_nsec, imp_log->xk, imp_log->xa, 
				imp_log->vk, imp_log->va, imp_log->v_unfilt, imp_log->fk, imp_log->f_unfilt, imp_log->xdes, imp_log->vdes, imp_log->cmd, imp_log->LSB[0], imp_log->LSF[0]); 
			
			pthread_mutex_unlock(&lock[i]);

		}
			
		if(temp_counter > MAX_COUNT) return;
	}
	
	return NULL;

}