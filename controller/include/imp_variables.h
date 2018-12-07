#ifndef INCLUDE_FILE

#define NSEC_IN_SEC 1000000000
#define STEP_NSEC 1000000 //control step time (1ms)

#define MAX_FORCE 50 //Newtons  
#define MAX_COMMAND 1.5

//Conversion
#define ENC_TO_MM 0.00115
#define MOTOR_ZERO 2.35 //zero movement from motor
#define MOTOR_ZERO_BWD 2.325  //forward and backwards deadzone limits
#define MOTOR_ZERO_FWD 2.43 
#define FT_GAIN 43.0
#define FT_OFFSET_OLD -0.156393
#define FT_OFFSET -10.25

//Controller Defaults (in terms of m)
#define P_GAIN 2//5
#define D_GAIN 1//20
#define X_DES 0.2
#define FIR_ORDER_V 10
#define FIR_ORDER_F 10

#define K_GAIN 10
#define M_GAIN 0.09
#define B_GAIN 0
#define V_MAX 200
#define X_END 400 //stroke length in mm

#define F_GAIN -0.005

#define MAT_EXP_ITERATIONS 5

#endif