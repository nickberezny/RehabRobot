#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 

#define STEP_NSEC 10000000

int main(int argc, char* argv[]) {

	struct timespec last_time;
    struct timespec curr_time;

    clock_gettime(CLOCK_MONOTONIC, &curr_time); 
    usleep(1000);
    clock_gettime(CLOCK_MONOTONIC, &last_time); 

    printf("Current: sec: %.1f, nanosec: %.5f\n", curr_tim.tv_sec, curr_time.tv_nsec);
    printf("Previous: sec: %.1f, nanosec: %.5f\n", last_tim.tv_sec, last_time.tv_nsec);
    printf("Difference: sec: %.1f, nanosec: %.5f\n", last_tim.tv_sec - curr_tim.tv_sec, last_tim.tv_nsec -curr_time.tv_nsec);
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