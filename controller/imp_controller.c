#include "include/imp_structures.h"
#include <stdlib.h>
#include <stdio.h>
#include <time.h>

#define NSEC_IN_SEC 1000000000

void imp_PD(struct impStruct * imp)
{
	imp->cmd = imp->P*(imp->xk - imp->xdes) + imp->D*(imp->vk - imp->vdes);
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
	step_time->tv_sec = start_time->tv_sec - end_time->tv_sec;
    step_time->tv_nsec = start_time->tv_nsec - end_time->tv_nsec;

    

	return;
}

void imp_WaitTime(double * total_step,  struct timespec * step_time, struct timespec * curr_time)
{

    *total_step += - step_time->tv_sec * NSEC_IN_SEC - step_time->tv_nsec;
    if(total_step <= 0) return;

    if(curr_time->tv_nsec + *total_step > NSEC_IN_SEC)
    {
    	curr_time->tv_sec++;
    	curr_time->tv_nsec += total_step - NSEC_IN_SEC; 
    }else{
    	curr_time->tv_nsec += total_step;
    }

    return;

}

	
