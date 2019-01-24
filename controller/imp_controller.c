#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <math.h>

#include "include/imp_variables.h"
#include "include/imp_structures.h"

void imp_PD(struct impStruct * imp)
{

/*------------------------------------------------------------------------
    Position controller (move to xdes)
        command = P*(xdes-x) + D*(vdes - d)
------------------------------------------------------------------------*/

	imp->cmd = imp->P*(imp->xdes - imp->xk) + imp->D*(imp->vdes - imp->vk);
    
	return;
}



void imp_Adm(struct impStruct * imp, double * xa, double * va)
{

/*------------------------------------------------------------------------
    Admittance control - go to position given force and desired impedance 
        Xa = Ad * X + Bd * F
        command = P*(x) + D*(va)
------------------------------------------------------------------------*/

	/*imp->xa =  imp->Ad[0]*(imp->xdes-imp->xk) + imp->Ad[1]*(imp->vdes-imp->vk) + imp->Bd[0] * (imp->fdes - imp->fk);
    imp->va = imp->Ad[2]*(imp->xdes-imp->xk) + imp->Ad[3]*(imp->vdes-imp->vk) + imp->Bd[1] * (imp->fdes - imp->fk);
    imp->cmd = imp->P*(imp->xa) + imp->D*(imp->va);*/

    imp->xa = imp->xdes - ( imp->Ad[0]*(imp->xdes - *xa) + imp->Ad[1]*(imp->vdes - *va) + imp->Bd[0] * (imp->fk) );
    imp->va = imp->vdes - ( imp->Ad[2]*(imp->xdes - *xa) + imp->Ad[3]*(imp->vdes - *va) + imp->Bd[1] * (imp->fk) );
    imp->cmd = imp->P*(imp->xa - imp->xk) + imp->D*(imp->va - imp->vk);

    *xa = imp->xa;
    *va = imp->va;

    //printf("CMD: %.4f\n", imp->cmd);

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

/*------------------------------------------------------------------------
    Calculate delta time between start and end time
        step time = start - end
------------------------------------------------------------------------*/

    step_time->tv_sec = 0;
    step_time->tv_nsec = 0;
	step_time->tv_sec = start_time->tv_sec - end_time->tv_sec;

    if(end_time->tv_nsec > start_time->tv_nsec)  step_time->tv_nsec = NSEC_IN_SEC + start_time->tv_nsec - end_time->tv_nsec;
    else step_time->tv_nsec = start_time->tv_nsec - end_time->tv_nsec;

	return;
}



void imp_WaitTime(struct timespec * step_time, struct timespec * curr_time)
{

/*------------------------------------------------------------------------
    Calculate remaining time in control step given sampling rate
------------------------------------------------------------------------*/

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



