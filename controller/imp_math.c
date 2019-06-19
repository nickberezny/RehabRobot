#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <string.h>
#include <time.h>

#include "include/imp_structures.h"
#include "include/imp_variables.h"

void matrix_square(double A[2][2], double C[2][2])
{

/*------------------------------------------------------------------------
	Squares a 2x2 matrices
		C = A*A
------------------------------------------------------------------------*/

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

/*------------------------------------------------------------------------
	Factorial of number n 
		ans = n!
------------------------------------------------------------------------*/

	for(int i = 0; i < n; i++)
		*ans = *ans * (i + 1);
	
	return;
}

void matrix_exp(double A[2][2], double B[2][2])
{

/*------------------------------------------------------------------------
Approximates matrix exponentiation for discrete to continuous conversion
Uses MAT_EXP_ITERATIONS iterations for numerical estimate
	B = exp(A) = I + A + A^2/fact(2) + A^3/fact(3) ...
------------------------------------------------------------------------*/

	
	//B = {0,0,0,0};
	double C[2][2] = {0};
	double D[2][2] = {0};
	double k = 0.0;

	C[0][0] = STEP_NSEC/NSEC_IN_SEC * A[0][0];
	C[1][0] = STEP_NSEC/NSEC_IN_SEC * A[1][0];
	C[0][1] = STEP_NSEC/NSEC_IN_SEC * A[0][1];
	C[1][1] = STEP_NSEC/NSEC_IN_SEC * A[1][1];

	memcpy(D, C, 4*sizeof(double));
	memcpy(B, C, 4*sizeof(double));


	for(int i = 1; i<MAT_EXP_ITERATIONS; i++)
	{
		k = 1.0;
		factorial(i+1, &k);
		matrix_square(D, C);
	
		for(int j = 0; j<2; j++) 
		{
			B[j][0] += C[j][0]/k;
			B[j][1] += C[j][1]/k;
		}
	}

	B[0][0] += 1.0; //add unity matrix
	B[1][1] += 1.0;

	return;
}

void invert_matrix(double A[2][2], double B[2][2])
{

/*------------------------------------------------------------------------
	Invert 2x2 matrix 
		B = A^-1
------------------------------------------------------------------------*/
	//printf("a to invert: %.2f,%.2f,%.2f,%.2f\n", A[0][0], A[0][1], A[1][0], A[1][1]);

	if(A[0][0]*A[1][1] - A[0][1]*A[1][0] == 0)
	{
		printf("Matrix is singular \n");
		return;
	}

	B[0][0] = A[1][1] / ( A[0][0]*A[1][1] - A[0][1]*A[1][0]);
	B[1][0] = -A[1][0] / ( A[0][0]*A[1][1] - A[0][1]*A[1][0]);
	B[0][1] = -A[0][1] / ( A[0][0]*A[1][1] - A[0][1]*A[1][0]);
	B[1][1] = A[0][0] / ( A[0][0]*A[1][1] - A[0][1]*A[1][0]);

	printf("Ainv: %.4f, %.4f, %.4f, %.4f\n", B[0][0], B[0][1], B[1][0], B[1][1]);

	return;
}

void imp_calc_Bd(double Ad[2][2], double A[2][2], double B[2], double Bd[2])
{

/*------------------------------------------------------------------------
	Approximates discrete B matrix 
		Bd = A^-1 *(Ad - I)*B
------------------------------------------------------------------------*/

	double Ainv[2][2] = {0.0};
	double temp[2][2] = {0.0};

	printf("a to invert 1: %.2f,%.2f,%.2f,%.2f\n", A[0][0], A[0][1], A[1][0], A[1][1]);

	invert_matrix(A, Ainv);

	temp[0][0] = Ainv[0][0]*(Ad[0][0] - 1.0) + Ainv[0][1]*Ad[1][0];
	temp[0][1] = Ainv[0][0]*Ad[0][1] + Ainv[0][1]*(Ad[1][1] - 1.0);
	temp[1][0] = Ainv[1][0]*(Ad[0][0] - 1.0) + Ainv[1][1]*(Ad[1][0]);
	temp[1][1] = Ainv[1][0]*Ad[0][1] + Ainv[1][1]*(Ad[1][1] - 1.0);

	 printf("temp: %.4f, %.4f, %.4f, %.4f\n", temp[0][0], temp[0][1], temp[1][0], temp[1][1]);

	Bd[0] = temp[0][0]*B[0] + temp[0][1]*B[1];
	Bd[1] = temp[1][0]*B[0] + temp[1][1]*B[1];

	return;
}

void imp_FIR(double * array, double * output, int * order)
{

/*------------------------------------------------------------------------
    Moving average fitler with set order
------------------------------------------------------------------------*/

    //moving average FIR filter of adjustable order

    array[0] = *output;

    for(int i = 1; i < *order; i++)
    {
        *output += array[i];
        array[i] = array[i+1];
    }
    
    array[*order] = array[0];
    //*output += *output;
    *output = *output / (double) *order;
}



void imp_traj(struct impStruct * imp, double * dir, double * xdes_old, double * x_end)
{

/*------------------------------------------------------------------------
Sets velocity trajectory to follow a parabola, with small velocity at the extremes and vmax in the middle
------------------------------------------------------------------------*/

    imp->xdes = *xdes_old;

    if(imp->xdes > *x_end - 0.025) *dir = -1.0;
    if(imp->xdes < 0.025) *dir = 1.0;
    if(imp->xdes < 0.0) imp->xdes = 0.0;
    
    imp->vdes = (*dir)*5.0 + (*dir)*( imp->vmax / pow((*x_end/2.0 ),2.0) ) * imp->xdes * abs(imp->xdes - *x_end);
    imp->xdes = imp->xdes + (imp->vdes * (STEP_NSEC/NSEC_IN_SEC));

    *xdes_old = imp->xdes; 

    /*
    imp->vdes = (*dir)*1.0 - (*dir)*( imp->vmax / pow((X_END/2.0),2.0) ) * imp->xk * (imp->xk - X_END);
    imp->xdes = imp->xk + (*dir)*(imp->vdes * STEP_NSEC/NSEC_IN_SEC); 
	*/

    return;
}

void imp_traj2(struct impStruct * imp, double * dir, double * xdes_old, double * x_end)
{

/*------------------------------------------------------------------------
Sets velocity trajectory to follow a parabola, with small velocity at the extremes and vmax in the middle
------------------------------------------------------------------------*/

    imp->xdes = *xdes_old;

    if(imp->xdes > *x_end - 0.025) *dir = -1.0;
    if(imp->xdes < 0.025) *dir = 1.0;
    if(imp->xdes < 0.0) imp->xdes = 0.0;
    
    if(imp->xdes < 0.4*(*x_end)){
    	imp->vdes = (*dir) * (imp->vmax/(0.4*(*x_end))*imp->xdes + 3.0);
    }
    else if(imp->xdes > 0.6*(*x_end))
    {
    	imp->vdes = (*dir) * (-imp->vmax/(0.6*(*x_end))*(imp->xdes - (*x_end)/0.6) + imp->vmax + 3.0);
    }
    else{
    	imp->vdes = (*dir)*imp->vmax;
    }


    imp->xdes = imp->xdes + (imp->vdes * (STEP_NSEC/NSEC_IN_SEC));

    *xdes_old = imp->xdes; 

    /*
    imp->vdes = (*dir)*1.0 - (*dir)*( imp->vmax / pow((X_END/2.0),2.0) ) * imp->xk * (imp->xk - X_END);
    imp->xdes = imp->xk + (*dir)*(imp->vdes * STEP_NSEC/NSEC_IN_SEC); 
	*/

    return;
}



/*
OLD
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