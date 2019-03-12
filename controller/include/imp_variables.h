/* GLOBAL PARAMETERS 
*****************************************************************************
	Test robot after changing ANY of these before running on a subject
*****************************************************************************
*/

#ifndef INCLUDE_FILE
#define INCLUDE_FILE

#define TCP_PORT 1337 //socket port
#define LINUX_SCHEDULER SCHED_RR //cpu scheduler, choose from: SCHED_FIFO, SCHED_RR, SCHED_DEADLINE

#define NSEC_IN_SEC 1000000000.0
#define STEP_NSEC 1000000.0 //control step time (1ms)

#define MAX_FORCE 50 //Newtons  
#define MAX_COMMAND 1.0

//Conversion
#define ENC_TO_MM 0.00115
#define MOTOR_ZERO 2.5 //zero movement from motor
#define MOTOR_ZERO_FWD 2.44  //forward and backwards deadzone limits
#define MOTOR_ZERO_BWD 2.57 
//#define FT_GAIN 43.0 //lbs
//#define FT_GAIN 100
#define FT_GAIN 100 //N
//#define FT_OFFSET_OLD -0.156393
//#define FT_OFFSET -10.25

//Controller Defaults (in terms of m)
#define P_GAIN 2.0 //5
#define D_GAIN 0.2 //20
#define X_DES 0.2 //m
#define FIR_ORDER_V 10
#define FIR_ORDER_F 10


#define K_GAIN 0.25 //  [N/mm]
#define M_GAIN 0.05 //  [Ns2/mm]
#define B_GAIN 0.4 //  [Ns/mm]
#define V_MAX 100.0 // [mm/s]
#define X_END 400.0 //stroke length in mm

//TODO Set Max/min 
#define PMAX 2.4
#define PMIN 0.1
#define DMAX 0.3
#define DMIN 0.05
#define KMAX 0.625
#define KMIN 0.0
#define BMAX 0.6
#define BMIN 0.1
#define MMAX 10
#define MMIN 0.05

#define V_MAX_MAX 200.0
#define V_MAX_MIN 0.0
#define X_DES_MAX 400.0 
#define X_DES_MIN 0.0 


#define F_GAIN -0.005

#define MAT_EXP_ITERATIONS 50 //number of iterations for matrix exp approximation

#endif