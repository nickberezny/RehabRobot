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


int adm_communication(struct amd_struct * adm)
{

	/**********************************************************************
					   Wait for input 
	***********************************************************************/

    if(CONNECT_TO_UI){

	    //start tcp socket
	    bind(listenfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr)); 
	    listen(listenfd, 100);

		//Start UI Process 
		system("gnome-terminal --working-directory=Documents/RehabRobot/server -e 'sudo node server.js'");
		connfd = accept(listenfd, (struct sockaddr*)NULL, NULL); 
		
		if(GET_PARAMS_FROM_UI){
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

					//find set parameters in message using regular expreesions 
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

					regcomp(&compiled, regex.K, REG_EXTENDED);
					if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
						sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
						sscanf(matchBuffer, "%lf", &imp[0].K);
					    if(DEBUG) { printf("K is: %f\n", imp[0].K); }
					}
					
					regcomp(&compiled, regex.B, REG_EXTENDED);
					if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
						sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
						sscanf(matchBuffer, "%lf", &imp[0].B);
					    if(DEBUG) { printf("B is: %f\n", imp[0].B); }
					}
					
					regcomp(&compiled, regex.M, REG_EXTENDED);
					if(regexec(&compiled, recvBuff, 2, matches, 0)==0){
						sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
						sscanf(matchBuffer, "%lf", &imp[0].M);
					    if(DEBUG) { printf("M is: %f\n", imp[0].M); }
					}
				}
					
					

				for(int i = 1; i < BUFFER_SIZE; i++)
				{
					imp[i].P = imp[0].P;
					imp[i].D = imp[0].D;
					imp[i].K = imp[0].K;
					imp[i].B = imp[0].B;
					imp[i].M = imp[0].M;
					imp[i].xdes = imp[0].xdes;
					imp[i].fp = imp[0].fp;
							
				}

				if(DEBUG) printf("Set All Parameters (From UI)...\n");

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

				
	    	}
	}
   		
	if(! GET_PARAMS_FROM_UI) {
   		//set default values if not connecting to UI (for testing)
	    for(int i = 0; i < BUFFER_SIZE; i++)
		{
			imp[i].P = P_GAIN / 1000.0;
			imp[i].D = D_GAIN / 1000.0;
			imp[i].K = K_GAIN;
			imp[i].B = B_GAIN;
			imp[i].M = M_GAIN;
			imp[i].xdes = X_DES*1000;
			imp[i].vdes = 0.0;
			imp[i].fdes = 0.0;
			imp[i].fp = imp[0].fp;
			imp[i].vmax = V_MAX;
			imp[i].F_Gain = F_GAIN;
					
		}

		if(DEBUG) printf("Set All Parameters...\n");
	}

	return 0;
}