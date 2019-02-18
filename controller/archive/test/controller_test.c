#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393

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

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
  
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    //CHECK FOR POWER
    double check = 0;
    while(check == 0)
    {
    	printf("Waiting for power ...\n");
    	LJM_eReadName(handle, "FIO0", &check); 
        //printf("Check: %f\n", check);
    }

    //CHECK BACK LIMIT SWITCH 
    check = 0;
    while(check == 0)
    {
    	printf("Checking back Limit Switch ...\n");
    	LJM_eReadName(handle, "FIO1", &check);
    }
    
    //CHECK FORCE SENSOR
    double * ft; 
    LJM_eReadName(handle, "FIO1", ft);
    *ft = FT_GAIN*(*ft + FT_OFFSET);
    printf("Current Force Measurment: %f\n", *ft);



	return 0;

}