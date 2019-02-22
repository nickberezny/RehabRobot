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


int adm_calibration(struct amd_struct * adm)
{

	if(DEBUG) printf("Calibrating Force Sensor, Keep motor enabled ...\n"); 

    LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    ft_offset = FT_GAIN*aValues[1]; 

    for(int i = 1; i < 20; i++)
    {
    	LJM_eNames(daqHandle, 5, aNames, aWrites, aNumValues, aValues, &errorAddress);
    	printf("Force: %.3f\n", ft_offset);
    	ft_offset = ( (ft_offset*(double)i) + FT_GAIN*aValues[1] ) / ((double)i + 1.0);
    	usleep(1000); //sleep to space out measurements
    }

    if(DEBUG) printf("Force sensor offset: %.3f\n", ft_offset);

    sleep(5);

	return 0;
}
