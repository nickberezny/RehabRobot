<<<<<<< HEAD
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393
#define MOTOR_ZERO 2.35

FIO2_EF_ENABLE = 0    //Make sure DIO-EF is disabled on DIO6
FIO3_EF_ENABLE = 0    //Make sure DIO-EF is disabled on DIO7

FIO2_EF_INDEX = 10    //Set feature index for DIO6 to quadrature.
FIO3_EF_INDEX = 10    //Set feature index for DIO7 to quadrature.

FIO2_EF_ENABLE = 1    //Enable quadrature DIO-EF on DIO6, for A phase.
FIO3_EF_ENABLE = 1    //Enable quadrature DIO-EF on DIO7, for B phase.

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

    double lsf[10] = {0}; //front limit swithc
    double lsb[10] = {0}; //back limit switch
  

    double buffer[4] = {0};
    double data = 9;

    float encCount;

  
    //double ScanRate = 10;
    //const int aScanList[2] = {2000,2001,2002,2003};

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
    
    const char * aNames[3] = {"FIO0","FIO1","FIO2_EF_READ_A_F"};
    int aWrites[3] = {LJM_READ, LJM_READ, LJM_READ};
    int aNumValues[3] = {1, 1, 1};
    double aValues[3];
    

    int errorAddress;
    int ii = 1;
    
    // handle comes from LJM_Open()
    //printf("Stream Start Error: %d\n", LJM_eStreamStart(handle,1,2,aScanList,&ScanRate));

    for(int i = 1; i < 10000; i++)
    {

        //aValues[2] = command; 

        LJM_eNames(handle, 2, aNames, aWrites, aNumValues, aValues, &errorAddress);
        //LJM_eStreamRead(handle, buffer, &DeviceScanBacklog, &LJMScanBacklog);
        lsf[ii] = aValues[0];
        lsb[ii] = aValues[1];
        encCount = aValues[2];
       

        if((lsf[ii] && !lsf[ii-1]) || (lsb[ii] && !lsb[ii-1]) )
        {
            command = MOTOR_ZERO - (command - MOTOR_ZERO);
        }

        LJM_eWriteName(handle, "DAC0", command);
    
        if(ii == 5) printf("EncA: %.1f, EncB %.1f, Front LS: %.1f, Back LS: %.1f, Command: %.2f\n", encA[ii], encB[ii], lsf[ii], lsb[ii], command);
        //if(i%100 == 0) printf("Device Backlog: %d, LJM Backlog: %d\n", DeviceScanBacklog, LJMScanBacklog);
        //usleep(10);

        bitENC[0] = bitENC[1];
        bitENC[1] = bitMAT[encA[ii]][encB[ii]];

        encCOUNT += encMAT[bitENC[0]][bitENC[1]];

        if(encCOUNT >= 10)
        {
            //get current time
            //find delta_t
            //speed = 10 * 0.0031416 / delta_t
            //prev time = curr time
            encCOUNT = 0;
        }


        if (++ii > 9) {
            ii = 1;
            lsf[0] = lsf[9];
            lsb[0] = lsb[9];
            encA[0] = encA[9];
            encB[0] = enc[9];
        } 

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

=======
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define FT_GAIN 43
#define FT_OFFSET -0.156393
#define MOTOR_ZERO 2.355

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

    double command = - 0.04 + MOTOR_ZERO;

    double lsf[10] = {0}; //front limit swithc
    double lsb[10] = {0}; //back limit switch
    double encA[10] = {0}; //back limit switch
    double encB[10] = {0}; //back limit switch
    int bitMAT[2][2] = {
                    {0,1},
                    {2,3}
                };
    int bitENC[2] = {0};
    int encMAT[4][4] = {
                    {0,-1,1,0},
                    {1,0,0,-1},
                    {-1,0,0,1},
                    {0,1,-1,0}
                };
    int encCOUNT = 0;

    double buffer[4] = {0};
    double data = 9;

  
    //double ScanRate = 10;
    //const int aScanList[2] = {2000,2001,2002,2003};

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
    
    const char * aNames[4] = {"FIO0","FIO1","AIN0","AIN1"};
    int aWrites[2] = {LJM_READ, LJM_READ, LJM_READ, LJM_READ};
    int aNumValues[4] = {1, 1, 1, 1};
    double aValues[4];
    

    int errorAddress;
    int ii = 1;
    
    // handle comes from LJM_Open()
    //printf("Stream Start Error: %d\n", LJM_eStreamStart(handle,1,2,aScanList,&ScanRate));

    for(int i = 1; i < 10000; i++)
    {

        //aValues[2] = command; 

        LJM_eNames(handle, 2, aNames, aWrites, aNumValues, aValues, &errorAddress);
        //LJM_eStreamRead(handle, buffer, &DeviceScanBacklog, &LJMScanBacklog);
        lsf[ii] = aValues[0];
        lsb[ii] = aValues[1];
        encA[ii] = aValues[2];
        encB[ii] = aValues[3];

        if((lsf[ii] && !lsf[ii-1]) || (lsb[ii] && !lsb[ii-1]) )
        {
            command = MOTOR_ZERO - (command - MOTOR_ZERO);
        }

        LJM_eWriteName(handle, "DAC0", command);
    
        if(ii == 5) printf("EncA: %.1f, EncB %.1f, Front LS: %.1f, Back LS: %.1f, Command: %.2f\n", encA[ii], encB[ii], lsf[ii], lsb[ii], command);
        //if(i%100 == 0) printf("Device Backlog: %d, LJM Backlog: %d\n", DeviceScanBacklog, LJMScanBacklog);
        //usleep(10);
        /*

        bitENC[0] = bitENC[1];
        bitENC[1] = bitMAT[encA[ii]][encB[ii]];

        encCOUNT += encMAT[bitENC[0]][bitENC[1]];

        if(encCOUNT >= 10)
        {
            printf("10 Counts\n");
            //get current time
            //find delta_t
            //speed = 10 * 0.0031416 / delta_t
            //prev time = curr time
            encCOUNT = 0;
        }
        */


        if (++ii > 9) {
            ii = 1;
            lsf[0] = lsf[9];
            lsb[0] = lsb[9];
            encA[0] = encA[9];
            encB[0] = encB[9];
        } 

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

>>>>>>> 7d49257b4403cbad2d08a5b67e0123f8a7fe6ae0
}