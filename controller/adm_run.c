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

#include "include/imp_variables.h"


int adm_run(struct amd_struct * adm)
{
	/**********************************************************************
					   	Create and join threads
	***********************************************************************/

    if(DEBUG) printf("Joining Threads ...\n"); 
   // sleep(10);
	//create and join threads 
	pthread_create(&thread[0], &attr[0], controller, (void *)imp);
	pthread_create(&thread[1], &attr[1], server, (void *)imp);
	pthread_create(&thread[2], &attr[2], logger, (void *)imp);
    pthread_join(thread[0], NULL);
	pthread_join(thread[1], NULL);
	pthread_join(thread[2], NULL);
	
	//finished sessions, begin shutdown
	LJM_eStreamStop(daqHandle);
	LJM_Close(daqHandle);
	fclose(imp[0].fp);
	shutdown(connfd, 2);
    if(DEBUG) printf("Finished, terminating program... \n");

	return 0;

}

