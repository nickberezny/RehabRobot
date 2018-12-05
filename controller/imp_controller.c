#include "include/imp_structures.h"
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <math.h>

#define NSEC_IN_SEC 1000000000
#define STEP_NSEC 1000000
#define X_END 400


void imp_PD(struct impStruct * imp)
{
	imp->cmd = imp->P*(imp->xdes - imp->xk) + imp->D*(imp->vdes - imp->vk);
    
	return;
}

void imp_Adm(struct impStruct * imp)
{


	imp->xa =  imp->Ad[0]*(imp->xdes-imp->xk) + imp->Ad[2]*(imp->vdes-imp->vk) + imp->Bd[0] * (imp->fdes - imp->fk);
	imp->va = imp->Ad[1]*(imp->xdes-imp->xk) + imp->Ad[3]*(imp->vdes-imp->vk) + imp->Bd[1] * (imp->fdes - imp->fk);
    imp->cmd = imp->P*(imp->xa) + imp->D*(imp->va);

	return;
}

void imp_Haptics(struct impStruct * imp)
{
	//TODO
    //arbitrary physics engine + LPF 
	return;
}

void imp_Force(struct impStruct * imp)
{
    imp->cmd = imp->F_Gain * imp->fk; 
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


void imp_FIR(double * array, double * output, int * order)
{

    //moving average FIR filter of adjustable order

    array[0] = *output;

    for(int i = 1; i < *order; i++)
    {
        *output += array[i];
        array[i] = array[i+1];
    }
    
    array[*order] = array[0];
    //*output += *output;
    *output = *output / (double) *order;
}

void imp_traj(struct impStruct * imp, double * dir)
{
    //Sets trajectory to follow a parabola, with 0 velocity at the extremes at vmax in the middle
    if(imp->xk > X_END) *dir = -1.0;
    if(imp->xk < 0.05) *dir = 1.0;
    if(imp->xk < 0.0) imp->xk = 0.0;
    imp->vdes = (*dir)*1.0 - (*dir)*( imp->vmax / pow((X_END/2.0),2.0) ) * imp->xk * (imp->xk - X_END);
    imp->xdes = imp->xk + (*dir)*(imp->vdes * STEP_NSEC/NSEC_IN_SEC); 
    return;
}