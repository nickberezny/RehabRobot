#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393
#define MOTOR_ZERO 2.35 
#define MOTOR_MOVE 0.04
#define STEP_NSEC 1000000 //1 ms
#define NSEC_IN_SEC 1000000000 //

int main(int argc, char* argv[]) {

	/*
		AIN0 : Force Sensor
		AIN1 : IR Sensor 
		FIO0 : power check (3.3V if on)
		FIO1 : Back LS
		FIO2 : Front LS 
		DAC0 : Motor out (0-5V -> -10 to 10V)

		connect to DAQ
		read power (Digital in) / wait for power
		check limit switch (should be engaged) -> if not, instruct to move
		check force sensor 
		move motor until reach next limit switch 
		wait for IR sensor/user input ready

		LJM_eWriteName(handle, "DAC0", 0);
    	LJM_eReadName(handle, "AIN0", data);
	*/

    struct timespec last_time;
    struct timespec curr_time;
    struct timespec delta_time;

    int imp_cont->wait_time;

	//CONNECT TO DAQ
	int err, handle;
	double value = 0;

    LJM_CloseAll();

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    LJM_eStreamStop(handle); //stop any previous streams

    //start Quadrature counter on DIO2 and DIO3
    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 0);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 0);

    LJM_eWriteName(handle, "DIO2_EF_INDEX", 10);
    LJM_eWriteName(handle, "DIO3_EF_INDEX", 10);

    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 1);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 1);


    double command = -MOTOR_MOVE + MOTOR_ZERO; //command to move to home

    int lsf[2] = {0}; //front limit switch
    int lsb[2] = {0}; //back limit switch
  
  //--------------------------
    double buffer[4] = {0};
    double data = 9;
    double encCount, revCount;
    double clock_time[2] = {0};
    double position = 0;

    //sleep(20);
    
    const char * aNames[3] = {"FIO0","FIO1","DIO2_EF_READ_A_F_AND_RESET"};
    int aWrites[3] = {LJM_READ, LJM_READ, LJM_READ};
    int aNumValues[3] = {1, 1, 1};
    double aValues[3];
    int errorAddress;
    

    //HOME----------------------------------------------------------

    while(1)
    {

        LJM_eNames(handle, 3, aNames, aWrites, aNumValues, aValues, &errorAddress);
        lsf[1] = aValues[0];
        lsb[1] = aValues[1];

        if(!lsb[1]) {
            LJM_eWriteName(handle, "DAC0", command);
        }else {
            break;
        }
    }

    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
    position = 0;
    desired_position = 3; //in inches
    P_gain = 0.25;

    LJM_eNames(handle, 3, aNames, aWrites, aNumValues, aValues, &errorAddress);
    encCount = aValues[2];

    lsf[0] = 0;
    lsb[0] = 1;
    lsf[1] = 0;
    lsb[1] = 1;


    //P-Controller----------------------------------------------------------
    
    for(int i = 1; i < 100000; i++)
    {

        //aValues[2] = command; 

        LJM_eNames(handle, 3, aNames, aWrites, aNumValues, aValues, &errorAddress);
     
        lsf[1] = aValues[0];
        lsb[1] = aValues[1];
        encCount = aValues[2]; //4 counts per pulse, 2000 per rev

        revCount = encCount/2000.0;
        position += revCount*(0.07547); //4 inches per gear rev = 4/53 in/rev 

        command = P_gain*(desired_position - position) + MOTOR_ZERO;

        //TODO: get time 
        //TODO: sleep 

        //vel = revCount / (clock_time[1] - clock_time[0]);
        //clock_time[0] = clock_time[1];

        if((lsf[1] && !lsf[0]) || (lsb[1] && !lsb[0]) )
        {
            command = MOTOR_ZERO;
        }

        LJM_eWriteName(handle, "DAC0", command);
    
        if(i%100 == 0) printf("Enc Count: %.f, Front LS: %d, Back LS: %d, Command: %.2f\n", encCount, lsf[ii], lsb[ii], command);

        lsf[0] = lsf[1];
        lsb[0] = lsb[1];

        //TIME -----------------------------------------------------

        clock_gettime(CLOCK_MONOTONIC, &curr_time); 

        delta_time.tv_sec = curr_time.tv_sec - last_time.tv_sec;
        delta_time.tv_nsec = curr_time.tv_nsec - last_time.tv_nsec;

        if (delta_time.tv_sec == 0 && delta_time.tv_nsec < 0)
        {
            pritnf("Time error - negative delta time\n");
            LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
            return 0;

        }
        else if (delta_time.tv_sec > 0 && delta_time.tv_nsec =< 0)
        {
            delta_time.tv_sec = 0;
            delta_time.tv_nsec = NSEC_IN_SEC + delta_time.tv_nsec;
        }
        else if (delta_time.tv_sec == 0 && delta_time.tv_nsec > 0) {}
        else 
        {
            printf("Delta time error\n");
            LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
            return 0;
        }

        imp_cont->wait_time = STEP_NSEC - delta_time.tv_nsec;

        //calculate time for next step
        if(imp_cont->wait_time > 0)
        {
            if(curr_time.tv_nsec + imp_cont->wait_time > NSEC_IN_SEC)
            {
                curr_time.tv_nsec = imp_cont->wait_time - (NSEC_IN_SEC - curr_time.tv_nsec);
                curr_time.tv_sec += 1.0; 
            }
            else 
            {
                curr_time.tv_nsec += imp_cont->wait_time;
            }

            clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &curr_time, NULL); //sleep until next step
        }
        
        clock_gettime(CLOCK_MONOTONIC, &last_time); //reset time 

        //------------------------------------------------------------
    

    }

    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
    LJM_eStreamStop(handle);

    /*
    //log data
    FILE * fp;
    fp = fopen ("encoder_data.txt","w");

    for(int i = 0; i < 10000; i++)
    {
        fprintf (fp, "%f, %f\n", lsf[ii], lsb[ii]);
    }
    
    fclose (fp);
    */

	return 0;


}
