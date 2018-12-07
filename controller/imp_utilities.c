#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <string.h>
#include <time.h>

//#include "include/imp_structures.h"
#include "include/imp_variables.h"

void matrix_exp(double A[2][2], double B[2][2]);

/*
//FOR TESTING PURPOSES 
int main()
{
	double A[2][2] = {{1.0,2.0},{3.0,4.0}};

	double C[2][2] = {0};

	struct timespec first;
	struct timespec last;

	clock_gettime(CLOCK_MONOTONIC, &first); 
	matrix_exp(A, C);
	clock_gettime(CLOCK_MONOTONIC, &last); 

	printf("%.1d, %.2d\n", first.tv_sec, first.tv_nsec);
	printf("%.1d, %.2d\n", last.tv_sec, last.tv_nsec);

	printf("%.2f, %.2f, %.2f, %.2f\n", C[0][0], C[0][1], C[1][0], C[1][1]);

	return 0;
}
*/

void matrix_square(double A[2][2], double C[2][2])
{
	double B[2][2] = {0};
	memcpy(B, C, 4*sizeof(double));

	for(int i = 0; i < 2; i++)
	{
		for(int j = 0; j < 2; j++)
		{
			C[i][j] = (A[i][i]) * (B[i][j]) + A[i][i+1-2*i]*B[i+1-2*i][j];
		}
		
	}

	return;
}

void factorial(double n, double * ans)
{

	for(int i = 0; i < n; i++)
		*ans = *ans * (i + 1);
	
	return;
}

void matrix_exp(double A[2][2], double B[2][2])
{

	//B = {0,0,0,0};
	double C[2][2] = {0};
	double k = 0.0;

	memcpy(C, A, 4*sizeof(double));
	memcpy(B, A, 4*sizeof(double));


	for(int i = 1; i<100; i++)
	{
		k = 1.0;
		factorial(i+1, &k);
		matrix_square(A, C);
	
		for(int j = 0; j<2; j++) 
		{
			B[j][0] += C[j][0]/k;
			B[j][1] += C[j][1]/k;
		}


	}

	return;
}









/*

size_t imp_length_json(struct impStruct * imp, double k, double b)
{
	//determine string length of json file with following strucure

	size_t len = (size_t)snprintf(NULL, 0, 
		"{\"x\":\"%.3f\",	 \
		\"dx\":\"%.3f\",	 \
		\"xdes\":\"%.3f\",	 \
		\"dxdes\":\"%.3f\",	 \
		\"F\":\"%.3f\",		 \
		\"cmd\":\"%.3f\",	 \
		\"k\":\"%.3f\",	 	 \
		\"b\":\"%.3f\",		 \
		\"limit\":\"%.3f\",		 \
		\"foot_sensor\":\"%.3f\"}", 	 

		imp->x, imp->dx, imp->xdes, imp->dxdes, imp->F, 	
		imp->cmd, k, b, imp->limit, imp->foot_sensor	
	);

	return len;
}



void imp_struct_to_json(struct impStruct * imp, double k, double b, char * json, size_t len)
{

	//create json structured string to send to Node server


    snprintf(json, len+1,  \
		"{\"x\":\"%.3f\", \
		\"dx\":\"%.3f\", \
		\"xdes\":\"%.3f\", \
		\"dxdes\":\"%.3f\", \
		\"F\":\"%.3f\", \
		\"cmd\":\"%.3f\", \
		\"k\":\"%.3f\", \
		\"b\":\"%.3f\", \
		\"limit\":\"%.3f\", \
		\"foot_sensor\":\"%.3f\"}", 

		imp->x, imp->dx, imp->xdes, imp->dxdes, imp->F, 
		imp->cmd, k, b, imp->limit, imp->foot_sensor
	);

	return NULL;
}

*/