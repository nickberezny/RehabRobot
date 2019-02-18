#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 

#define STEP_NSEC 10000000

int main(int argc, char* argv[]) {

	struct timespec last_time;
    struct timespec curr_time;

    clock_gettime(CLOCK_MONOTONIC, &curr_time); 
    usleep(100000);
    clock_gettime(CLOCK_MONOTONIC, &last_time); 

    printf("Current: sec: %ld, nanosec: %ld\n", curr_time.tv_sec, curr_time.tv_nsec);
    printf("Previous: sec: %ld, nanosec: %ld\n", last_time.tv_sec, last_time.tv_nsec);
    printf("Difference: sec: %ld, nanosec: %ld\n", last_time.tv_sec - curr_time.tv_sec, last_time.tv_nsec -curr_time.tv_nsec);
    //calculate time for next step
    /*
    if(last_time.tv_nsec + STEP_NSEC > 1000000000)
    {
        last_time.tv_nsec = STEP_NSEC - (1000000000 - last_time.tv_nsec);
        last_time.tv_sec += 1.0; 
    }
    else 
    {
        last_time.tv_nsec += STEP_NSEC;
    }
    */

    


    return 0;
}
