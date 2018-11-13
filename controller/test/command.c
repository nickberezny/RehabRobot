#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393
#define MOTOR_ZERO 2.33

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

	//CONNECT TO DAQ
	int err, handle;
	double value = 0;
    double command = 0;
    double * data;

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
  
    printf("Connected to LabJack %s = %f\n", NAME, value); \

    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);

    /*
    for(int i = 0; i < 1000000; i++)
    {
        command = MOTOR_ZERO-i*0.000009;
        //LJM_eWriteName(handle, "DAC0", command);
        LJM_eReadName(handle, "AIN0", data);
        printf("Command: %.4f Encoder: %.3f\n", command, *data);
        //usleep(3000);
    }

    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
 
    FILE * fp;
    fp = fopen ("encoder_data.txt","w");

    for(int i = 0; i < 10000; i++)
    {
        fprintf (fp, "%f\n", chA[i]);
    }
    

    fclose (fp);
    
    */

	return 0;

}