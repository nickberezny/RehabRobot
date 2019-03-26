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
    imp->cmd = imp->P*(imp->xa - imp->xk) + imp->D*(- imp->vk);

    *xa = imp->xa;
    *va = imp->va;

    //printf("CMD: %.4f\n", imp->cmd);

	return;
}

void imp_Adm_free(struct impStruct * imp, double * xa, double * va)
{

/*------------------------------------------------------------------------
    Admittance control - go to position given force and desired impedance
    Free motion - no spring constant (for games with no specific trajectory) 
        Xa = Ad * X + Bd * F
        command = P*(x) + D*(va)
------------------------------------------------------------------------*/

    imp->xa = imp->xdes - ( imp->Adf[0]*(imp->xdes - *xa) + imp->Adf[1]*(imp->vdes - *va) + imp->Bdf[0] * (imp->fk) );
    imp->va = imp->vdes - ( imp->Adf[2]*(imp->xdes - *xa) + imp->Adf[3]*(imp->vdes - *va) + imp->Bdf[1] * (imp->fk) );
    imp->cmd = imp->P*(imp->xa - imp->xk) + imp->D*(imp->va - imp->vk);

    *xa = imp->xa;
    *va = imp->va;

    //printf("CMD: %.4f\n", imp->cmd);

    return;
}



void imp_Haptics(struct impStruct * imp)
{
    /*

        Haptic controller + coupling // For ADMITTANCE DISPLAY + ADMITTANCE ENVIRONMENT

        (1) Fe(k) = F(k) + (mb*(v(k-1) - v(k)) + m(Fe(k-1) - F(k-1))) / (m + bT) 
        (2) calc Fw (disturbance)
        (3) calc ve(Fe) = v
            xk = v(k-1) * dt
            vk = (Fe + Fw)/m  * dt
        (4) use PD control to achieve v 

    */

    imp->Fa = imp->fk + (imp->m*imp->b*(imp->va_1 - imp->va) + imp->m*(imp->Fa_1 - imp->Fk_1))/(imp->m + imp->b * imp->T);
    imp->va = imp->T * (imp->Fa + imp->Fw)/imp->M; //admittance haptics
    imp->xa = imp->va*imp->T;

    //PD Control
    imp->cmd = imp->P*(imp->xa - imp->xk) + imp->D*(imp->va - imp->vk);

    //Update variables
    imp->va_1 = imp->va;
    imp->Fa_1 = imp->Fa;
    imp->Fk_1 = imp->fk;



	return;
}

void imp_Haptics_impedance(struct impStruct * imp, struct physics_ball * ball,  double * xa, double * va, double *fa, double * fk)
{
   
    /*

        Haptic controller + coupling // For ADMITTANCE DISPLAY + IMPEDANCE ENVIRONMENT

        (1) calc ve(k) = ve(k-1) + (1/b + T/m)*(F(k) - Fe(k)) - (1/b)(F(k-1) - Fe(k-1))
        (2) calc Fe(ve) (impedance environment)
        (3) calc x(k) = ve(k) * dt
        (4) use PD control to achieve v 

    */
    
    imp->va = *va - (1.0/imp->b + imp->T/imp->m)*(imp->fk - imp->Fa) + (1.0/imp->b)*(*fa - *fk);
    
    //calc imp->Fa given x 
    //imp_physics(imp, ball);
    //imp->Fa = -ball->Fs; 

    imp->Fa = imp->K * (imp->xdes - imp->xk); //spring impedance 

    imp->xa += imp->va*imp->T;

    //PD Control
    imp->cmd = imp->P*(imp->xa - imp->xk) + imp->D*(- imp->vk);

    //Update variables
    *va = imp->va;
    *fk = imp->fk;
    *fa = imp->Fa;

    return;
}

void imp_physics(struct impStruct * imp, struct physics_ball * ball)
{
     
    if(abs(imp->xk) < POSITION_REST && abs(imp->vk) < VELOCITY_REST && !ball->in_play)
    {
        //ball not in play, player in rest position => add ball
        ball->in_play = 1;
        ball->contact = 0;

        
        if(imp->start_time.tv_sec % 2 == 0) //randomly assign a side 
        {   
            //add to back of device
            ball->dir = 1;
            ball->x_mass = 0.0;

        }else
        {
            //add to front of device
            ball->dir = -1;
            ball->x_mass = X_END;
        } 

        ball->v_mass = (double) ball->dir; 
        ball->Fs = 0.0;
    }

    if(ball->in_play){
        if(ball->dx + ball->dir * ball->x_mass > ball->dir * imp->xk) 
        {
            //ball is in contact with player, determine interaction force
            ball->contact = 1;
            ball->Fs = ball->k * (ball->dx + ball->dir*(ball->x_mass - imp->xk));
        }
        else{
            if(ball->contact = 1) ball->in_play = 0; //if ball has left player, delete
            ball->contact = 0;
            ball->Fs = 0.0;
        }

        //physics - euler approximation of differential dynamics 
        //ball->v_mass -= ball->dir * imp->step_time * ball->Fs / ball->m;
        //ball->x_mass += ball->v_mass * imp->step_time;

    }

    return;
}

void imp_gait(struct impStruct * imp, struct gait_sim * gait)
{
    /*
    (1) hold above xthresh for ~3s
    (2) trajectory downwards with spring trajectory 
    (3) floor strike: high damping to resist motion. Hold fthresh for ~2s
    (4) move upwards against static spring 
    (5) hold above xthresh for ~3s and repeat
    */

    //each phase: ultimately use xk to calc fs 

    switch(gait->phase){

        //HOLD ABOVE THRESHOLD AGAINST 'gravity'
        case 1:
            
            gait->Fs = gait->k_gravity*(imp->xk - gait->x_floor);
            if(imp->xk < gait->x_thresh - 0.1) gait->phase = 2;
            break;

        //INITIATE MOVEMENT BY MOVING BELOW THREHOLD 
        case 2:

            //set Fs to 0 
            if(imp->xk > gait->x_thresh) gait->phase = 3;
            break;

        //TRAJECTORY DOWN WITH 'GRAVITY' ASSISTANCE
        case 3:

            //calc traj
            gait->Fs = gait->k_assist*(imp->xk - gait->x_traj);
            if(imp->xk > gait->x_floor) gait->phase = 4;
            break;
        
        //RESIST WITH FLOOR STIFFNESS, WAIT FOR FORCE THRESHOLD
        case 4:

            gait->Fs = gait->k_floor*(imp->xk - gait->x_floor);
            if(imp->fk > gait->f_thresh) gait->phase = 1;
            break;
        
    
    }    

    return;
}

void imp_sit_to_stand()
{
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



