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


int adm_init(struct amd_struct * adm)
{

    //int start_controller = 0;

    /**********************************************************************
					   Initialize TCP Socket
	***********************************************************************/
		
    listenfd = socket(AF_INET, SOCK_STREAM, 0);
    memset(&serv_addr, '0', sizeof(serv_addr));
    
    serv_addr.sin_family = AF_INET;
    inet_pton(AF_INET, "127.0.0.1",  &serv_addr.sin_addr.s_addr);
    serv_addr.sin_port = htons(TCP_PORT); 

    printf("Initialized Socket\n"); 

    /**********************************************************************
					  		 Initialize DAQ
	***********************************************************************/

    daqHandle = init_daq(daqHandle);

    double value = 0;
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(daqHandle, NAME, &value);

    printf("Connected to LabJack %s = %f\n", NAME, value);


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

	//printf("%s\n", data_file_name);
	const char file_ext[] = "data.txt";
	char folder[1000] = "data/";
	strcat(data_file_name, file_ext);
	strcat(folder, data_file_name);

	for(int i; i < strlen(folder) - 1; i++)
	{
		if (folder[i] == ' ') 
		    folder[i]='_';
		if (folder[i] == ':')
			folder[i]='-';
	}


   //create file name (date&time_data.txt)

	double freq = NSEC_IN_SEC / STEP_NSEC / 1000.0;
	char freq_buff[1000];
	sprintf(freq_buff, "Controller Frequency: %.2f kHz", freq);

    imp[0].fp = fopen (folder,"w");
    fprintf (imp[0].fp, "%s", asctime (timeinfo) ); 
    fprintf (imp[0].fp, "%s\n", freq_buff); 
    fprintf (imp[0].fp, "Time(s), Time(ns), x, xa, v, va, v_unfilt, f, f_unfilt, xdes, vdes, cmd, LSB, LSF\n"); //print header
    //fclose(imp[0].fp);
    
    if(DEBUG) printf("Created data file %s\n", folder); 


    /**********************************************************************
					   Initialize Mutexes
	***********************************************************************/

	for(int i = 0; i < BUFFER_SIZE; i++)
	{
		pthread_mutex_init(&lock[i], NULL); //init mutex locks
		//struct imp *point = &(imp[i]); //allocate memory 
		//point = (struct imp*)calloc(STRUCTURE_ELEMENTS,sizeof(imp[i])); 
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
    	init_thread(&attr[i], &param[i], 98-2*i);
    }


	return 0;
}