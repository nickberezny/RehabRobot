#include <stdlib.h>
#include <stdio.h>

#include "include/imp_structures.h"

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