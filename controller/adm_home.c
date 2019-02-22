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


int adm_home(struct amd_struct * adm)
{

	sleep(2);
    
    if(DEBUG) printf("Homing ...\n");     
   
    aValues[0] = MOTOR_ZERO; 
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    imp[9].LSB[0] = aValues[3];

    printf("%f\n", aValues[3]);

    while(imp[9].LSB[0] == 0)
    {
    	aValues[0] = MOTOR_ZERO_BWD - 0.02; 
    	LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    	imp[9].LSB[0] = aValues[3];
    	//printf("Enc: %.3f\n", ENC_TO_MM*(double)aValues[4]);

    }

    aValues[0] = MOTOR_ZERO; 
    //Robot should not be homed, reading the encoder will zero the position here.
    
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);

    
	return 0;
}