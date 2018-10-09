#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

int main(int argc, char* argv[]) {
	
	//init
	//read and print DAQ
	//interpret encoder

	int err, handle;
	double value = 0;
	double * data;

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
  
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    LJM_eReadName(handle, "AIN0", data);

    printf("AIN0 Data: %f\n", data);

}

