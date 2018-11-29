#include "include/imp_structures.h"
#include <stdlib.h>
#include <stdio.h>
#include <time.h>

#define NSEC_IN_SEC 1000000000
#define STEP_NSEC 1500000

void imp_PD(struct impStruct * imp)
{
	imp->cmd = imp->P*(imp->xdes - imp->xk) + imp->D*(imp->vdes - imp->vk);
	return;
}

void imp_Adm(struct impStruct * imp)
{
	imp->xa = imp->xdes + imp->Ad[0]*imp->xk + imp->Ad[2]*imp->vk + imp->Bd[0] * (imp->fk - imp->fdes);
	imp->va = imp->vdes + imp->Ad[1]*imp->xk + imp->Ad[3]*imp->vk + imp->Bd[1] * (imp->fk - imp->fdes);
	return;
}

void imp_Haptics(struct impStruct * imp)
{
	//TODO
	return;
}

void imp_StepTime(struct timespec * start_time, struct timespec * end_time, struct timespec * step_time  )
{
    step_time->tv_sec = 0;
    step_time->tv_nsec = 0;
	step_time->tv_sec = start_time->tv_sec - end_time->tv_sec;

    if(end_time->tv_nsec > start_time->tv_nsec)  step_time->tv_nsec = NSEC_IN_SEC + start_time->tv_nsec - end_time->tv_nsec;
    else step_time->tv_nsec = start_time->tv_nsec - end_time->tv_nsec;

    //printf("Total step calc: %d . %d\n", step_time->tv_sec, step_time->tv_nsec);

	return;
}

void imp_WaitTime(struct timespec * step_time, struct timespec * curr_time)
{
    if(STEP_NSEC - step_time->tv_nsec <= 0) return;

    if(curr_time->tv_nsec + STEP_NSEC - step_time->tv_nsec > NSEC_IN_SEC)
    {
    	curr_time->tv_sec += 1;
    	curr_time->tv_nsec += STEP_NSEC - step_time->tv_nsec - NSEC_IN_SEC; 
    }else{
        curr_time->tv_nsec += STEP_NSEC - step_time->tv_nsec;
    }



    return;

}

	
