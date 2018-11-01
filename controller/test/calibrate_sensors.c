#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <LabJackM.h> //DAQ library
#include "include/LJM_Utilities.h"

#define NUM_SAMPLES 10000

int main(int argc, char* argv[]) {

	int err, handle;
	double value = 0;
	double * data;
	double avg_0 = 0;
    double avg_1 = 0;
    double avg_2 = 0;
    double avg_3 = 0;

    // Open first found LabJack
    err = LJM_Open(LJM_dtANY, LJM_ctANY, "LJM_idANY", &handle);
    const char * NAME = {"SERIAL_NUMBER"};
    LJM_eReadName(handle, NAME, &value);
  
    printf("Connected to LabJack %s = %f\n", NAME, value); 

    FILE *out_file = fopen("sensor_data.txt", "w"); 

    fprintf(out_file, "No Force\n");
    printf("No Weight - hold sensor free of force, and press ENTER");
    getchar();

    for(int i = 1; i<NUM_SAMPLES; i++)
    {
        
    	LJM_eReadName(handle, "AIN0", data);

    	if(i > 1) avg_0 = (avg_0*(i-1) + *data)/i; 
    	else avg_0 = *data;

        fprintf(out_file, "%f\n", *data); // write to file 
    	printf("Data: %f\n Average: %f\n", *data, avg_0);
    	
    }

    fprintf(out_file, "Force: 1lb\n");
    printf("Add 1 lb weight and press ENTER");
    getchar();

    for(int i = 1; i<NUM_SAMPLES; i++)
    {

        LJM_eReadName(handle, "AIN0", data);

        if(i > 1) avg_1 = (avg_1*(i-1) + *data)/i; 
        else avg_1 = *data;

        fprintf(out_file, "%f\n", *data); // write to file 
        printf("Data: %f\n Average: %f\n", *data, avg_1);
        
    }

    fprintf(out_file, "Force: 2lb\n");
    printf("Add 2 lb weight and press ENTER");
    getchar();

    for(int i = 1; i<NUM_SAMPLES; i++)
    {

        LJM_eReadName(handle, "AIN0", data);

        if(i > 1) avg_2 = (avg_2*(i-1) + *data)/i; 
        else avg_2 = *data;

        fprintf(out_file, "%f\n", *data); // write to file 
        printf("Data: %f\n Average: %f\n", *data, avg_2);
        
    }

    fprintf(out_file, "Force: 3lb\n");
    printf("Add 3 lb weight and press ENTER");
    getchar();

    for(int i = 1; i<NUM_SAMPLES; i++)
    {

        LJM_eReadName(handle, "AIN0", data);

        if(i > 1) avg_3 = (avg_3*(i-1) + *data)/i; 
        else avg_3 = *data;

        fprintf(out_file, "%f\n", *data); // write to file 
        printf("Data: %f\n Average: %f\n", *data, avg_3);
        
    }


 
    return 0;

}

