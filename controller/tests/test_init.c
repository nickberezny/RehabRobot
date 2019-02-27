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

#define DEBUG 1 //will print updates
#define CONNECT_TO_UI 1
#define GET_PARAMS_FROM_UI 0 //will get params from remote UI (set 0 for testing, 1 for production)
#define MAX_COUNT 50999 //maximum iterations before shutdown (only on debug) 

#define BUFFER_SIZE 10 //size of data sturcture array
#define STRUCTURE_ELEMENTS 25 //number of elements in data structure

/**********************************************************************
					   Global Variables
***********************************************************************/

int test_init(int argc, char* argv[])
{
	struct admStrut * adm; 
	int err = adm_init(adm);

	if(!err){
		printf("Initialization succesful");
	}

	return 0;

}

