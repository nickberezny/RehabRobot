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

int adm_params(struct amd_struct * adm)
{

	//increase command until encoders read fwd/bwd motion
	//set MOTOR_ZERO_BACKWARD ...
	//Get torque constant? get force gain?
	//Tune gains? 

    if(DEBUG) printf("Finding motor deadzones ...\n");     
   
    aValues[0] = MOTOR_ZERO; 
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);

    sleep(5);

    //check limit switchs 
    imp[9].LSB[0] = aValues[3];

    double bwd_zero = MOTOR_ZERO;
    double fwd_zero = MOTOR_ZERO;

    while((double)aValues[4] == 0)
    {
    	fwd_zero -= 0.01; 
    	aValues[0] = fwd_zero; 
    	LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    	//imp[9].LSB[0] = aValues[3];
    	//printf("Enc: %.3f\n", ENC_TO_MM*(double)aValues[4]);

    }

    aValues[0] = MOTOR_ZERO; 

    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);	

    sleep(5);

    while((double)aValues[4] == 0)
    {
    	bwd_zero += 0.01; 
    	aValues[0] = bwd_zero; 
    	LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    	//imp[9].LSB[0] = aValues[3];
    	//printf("Enc: %.3f\n", ENC_TO_MM*(double)aValues[4]);

    }

    aValues[0] = MOTOR_ZERO; 
    //Robot should not be homed, reading the encoder will zero the position here.
    
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);	

	return 0;
}