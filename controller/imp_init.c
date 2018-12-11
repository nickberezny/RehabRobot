#include <stdlib.h>
#include <stdio.h>

#include <limits.h>
#include <pthread.h>
#include <sched.h>
#include <sys/mman.h>
#include <time.h>
#include <stdbool.h>

#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

#include <LabJackM.h>

#include "include/imp_structures.h"
#include "include/imp_variables.h"


bool init_thread(pthread_attr_t * attr, struct sched_param * param, int priority)
{

    /*------------------------------------------------------------------------
        Create a thread with priority and scheduler (set in imp_variables)
    ------------------------------------------------------------------------*/

	// Initialize pthread attributes (default values) 
    if (pthread_attr_init(attr)) {
        printf("init pthread attributes failed \n");
        return false;
    }

    // Set a specific stack size  
    if (pthread_attr_setstacksize(attr, PTHREAD_STACK_MIN)) {
        printf("pthread setstacksize failed \n");
        return false;
    }

    // Set scheduler policy and priority of pthread (SCHED_FIFO, SCHED_RR, SCHED_DEADLINE)
    if (pthread_attr_setschedpolicy(attr, LINUX_SCHEDULER)) {
        printf("pthread setschedpolicy failed \n");
        return false;
    }
    param->sched_priority = priority; //priority (0-99)

    if (pthread_attr_setschedparam(attr, param)) {
        printf("pthread setschedparam failed \n");
        return false;
    }

    // Use scheduling parameters of attr 
    if (pthread_attr_setinheritsched(attr, PTHREAD_EXPLICIT_SCHED)) {
        printf("pthread setinheritsched failed \n");
        return false;
    }

    return true;

}

bool init_sock(struct socket_data * sock) 
{

/*------------------------------------------------------------------------
    Create a tcp socket for communication with node server (UI) 
------------------------------------------------------------------------*/
    
    sock->opt = 1;
    
    sock->server_fd = socket(AF_INET, SOCK_STREAM, 0);
    
    setsockopt(sock->server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT,
        &(sock->opt), sizeof(sock->opt));
    sock->address.sin_family = AF_INET;
    sock->address.sin_port = htons( PORT );
    inet_pton(AF_INET, "127.0.0.1", &sock->address.sin_addr);

    bind(sock->server_fd, (struct sockaddr *)&(sock->address), sizeof(sock->address));
    listen(sock->server_fd, 3);

    
    return true;
}

void init_log(char * filename)
{
    //get local time
    time_t rawtime;
    struct tm * timeinfo;

    time ( &rawtime );
    timeinfo = localtime ( &rawtime ); 

    FILE * initFile = fopen(filename,"w");

    //file header
    fprintf(initFile, "Rehab Robot Log File\n", asctime(timeinfo));
    fprintf(initFile, "%s\n", asctime(timeinfo));

    fclose(initFile);
}

int init_daq()
{

/*------------------------------------------------------------------------
    Connect to Labjack DAQ, and set up its quadrature encoder counter 
------------------------------------------------------------------------*/
    
    int err, handle;
    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    //ErrorCheck(err, "LJM_Open");

    LJM_eStreamStop(handle); //stop any previous streams
    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO); //set motor to zero
    
    //start Quadrature counter on DIO2 and DIO3
    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 0);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 0);

    LJM_eWriteName(handle, "DIO2_EF_INDEX", 10);
    LJM_eWriteName(handle, "DIO3_EF_INDEX", 10);

    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 1);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 1);

    //set Analog in resolution
    LJM_eWriteName(handle, "AIN0_RESOLUTION_INDEX", 1);
    LJM_eWriteName(handle, "AIN0_SETTLING_US", 0);

    return handle;

}