#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define GAIN 43
//44.210619391
//44.339016117
//41.552973115
//42.95348138

#define OFFSET -0.151194 - 0.005199

#define VERTICLE_OFFSET 0.002646

int main(int argc, char* argv[]) {
	
	//init
	//read and print DAQ
	//interpret encoder

	int err, handle;
	double value = 0;
	double * data;
	double avg = 0;

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
  
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    for(int i = 1; i<20000; i++)
    {
    	LJM_eReadName(handle, "AIN0", data);
    	*data = GAIN*(*data + OFFSET);
    	if(i > 1) avg = (avg*(i-1) + *data)/i; 
    	else avg = *data;

    	//printf("Data: %f\n Average: %f\n", *data, avg);
    	printf("Data: %f\n",*data);
    	sleep(1);
    	
    }
 
 /*
    while(1)
    {
    	//LJM_eWriteName(handle, "DAC0", 2.5);
    	LJM_eReadName(handle, "AIN0", data);
    	*data = 44.4*(*data - 0.152); 
    	printf("AIN0 Data: %f\n", *data);
    	sleep(1);
    }
    */
    
    return;

}

