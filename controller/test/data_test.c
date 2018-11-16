#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 

int main(int argc, char* argv[]) {

	time_t rawtime;
	struct tm * timeinfo;

	time ( &rawtime );
	timeinfo = localtime ( &rawtime );

    //log data
    FILE * fp;
    fp = fopen ("data_test.txt","w");
    fprintf (fp, "%s", asctime (timeinfo) ); 
    fprintf (fp, "Seconds, Nanoseconds, Iterations, Iterations Squared\n"); 
 
	struct timespec last_time;

	for(int i = 0; i < 100; i++)
	{
		clock_gettime(CLOCK_MONOTONIC, &last_time);
		fprintf (fp, "%ld, %ld, %d, %d\n", last_time.tv_sec, last_time.tv_nsec, i, i*i); 
		usleep(1000);
	}

	fclose (fp);
	return 0;
}
