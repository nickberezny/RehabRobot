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

    //LJM_eWriteName(handle, "FIO0", 0);
    //LJM_eWriteName(handle, "DAC0", 0);

    double command = - 0.05 + MOTOR_ZERO;

    double lsf[10000] = {0}; //front limit swithc
    double lsb[10000] = {0}; //back limit switch
    double buffer[2] = {0};
    double data = 9;

  
    double ScanRate = 10;
    const int aScanList[2] = {2000,2001};

    int DeviceScanBacklog = 0; 
    int LJMScanBacklog = 0;
    int lsReset = 0;

    //sleep(20);

    /*
    const char * aNames[3] = {"FIO0","FIO1","DAC0"};
    int aWrites[3] = {LJM_READ, LJM_READ, LJM_WRITE};
    int aNumValues[3] = {1, 1, 1};
    double aValues[3];
    */
    
    const char * aNames[2] = {"FIO0","FIO1"};
    int aWrites[2] = {LJM_READ, LJM_READ};
    int aNumValues[2] = {1, 1};
    double aValues[2];
    

    int errorAddress;
    
    // handle comes from LJM_Open()
    //printf("Stream Start Error: %d\n", LJM_eStreamStart(handle,1,2,aScanList,&ScanRate));

    for(int i = 1; i < 10000; i++)
    {

        //aValues[2] = command; 

        LJM_eNames(handle, 2, aNames, aWrites, aNumValues, aValues, &errorAddress);
        //LJM_eStreamRead(handle, buffer, &DeviceScanBacklog, &LJMScanBacklog);
        lsf[i] = aValues[0];
        lsb[i] = aValues[1];

        //LJM_eReadName(handle, "FIO0", &data);
        //lsf[i] = data;

        
        if((lsf[i] && !lsf[i-1]) || (lsb[i] && !lsb[i-1]) )
        {
            command = MOTOR_ZERO - (command - MOTOR_ZERO);
        }

        LJM_eWriteName(handle, "DAC0", command);
    
        //printf("%d\n",i);
        if(i%100 == 0) printf("Front LS: %.2f, Back LS: %.2f, Command: %.2f\n", lsf[i], lsb[i], command);
        //if(i%100 == 0) printf("Device Backlog: %d, LJM Backlog: %d\n", DeviceScanBacklog, LJMScanBacklog);
        //usleep(10);

    }

    LJM_eWriteName(handle, "DAC0", MOTOR_ZERO);
    LJM_eStreamStop(handle);

    //log data
    FILE * fp;
    fp = fopen ("encoder_data.txt","w");

    for(int i = 0; i < 10000; i++)
    {
        fprintf (fp, "%f, %f\n", lsf[i], lsb[i]);
    }
    

    fclose (fp);

	return 0;

}