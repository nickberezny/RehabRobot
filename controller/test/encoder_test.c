#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393
#define MOTOR_ZERO 2.35

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

        LJM_ERROR_RETURN LJM_eStreamStart(
                      handle, 
                      int ScansPerRead,
                      int NumAddresses, 
                      const int * aScanList, 
                      double * ScanRate) 

	*/

	//CONNECT TO DAQ
	int err, handle;
	double value = 0;

    LJM_CloseAll();

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);

    LJM_eStreamStop(handle); //stop any previous streams
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    LJM_eWriteName(handle, "DIO2_EF_INDEX", 10);
    LJM_eWriteName(handle, "DIO3_EF_INDEX", 10);

    LJM_eWriteName(handle, "DIO2_EF_ENABLE", 1);
    LJM_eWriteName(handle, "DIO3_EF_ENABLE", 1);


    double encCount;


    for(int i = 1; i < 10000; i++)
    {


        LJM_eWriteName(handle, "FIO0", 1);
        usleep(50);
        LJM_eWriteName(handle, "FIO1", 1);
        usleep(50);
        LJM_eWriteName(handle, "FIO0", 0);
        usleep(50);
        LJM_eWriteName(handle, "FIO1", 0);
        LJM_eReadName(handle, "DIO2_EF_READ_A", &encCount);
        
    
        printf("Enc Count: %d\n", (int)encCount);

    }

	return 0;


}
