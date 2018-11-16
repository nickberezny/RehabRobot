#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 

int main(int argc, char* argv[]) {

	
    //log data
    FILE * fp;
    fp = fopen ("data_test.txt","w");
    fprintf (fp, "Seconds, Nanoseconds\n"); 
 
	struct timespec last_time;

	for(int i = 0; i < 100; i++)
	{
		clock_gettime(CLOCK_MONOTONIC, &last_time);
		fprintf (fp, "%ld, %ld\n", last_time.tv_sec, last_time.tv_nsec); 
		usleep(1000);
	}

	fclose (fp);
	return 0;
}