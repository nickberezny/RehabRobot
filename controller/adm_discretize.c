#include <stdlib.h>
#include <stdio.h>

#include <limits.h>
#include <pthread.h>
#include <sched.h>
#include <sys/mman.h>
#include <sys/time.h>
#include <time.h>
#include <stdbool.h>
#include <string.h>

#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <poll.h>
#include <signal.h>

#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

#include <LabJackM.h> 

#include "include/imp_structures.h"
#include "include/LJM_Utilities.h"

#include "include/imp_variables.h"


int adm_discretize(struct amd_struct * adm)
{
	
	/**********************************************************************
					   	Calculate Ad, Bd
	***********************************************************************/

    //descrete state space for admittance control (x(k+1) = Ad*x(k) + Bd*u(k))
   	
    double A[2][2] = {{0.0, 1.0},{-imp[0].K/imp[0].M, -imp[0].B/imp[0].M}};
    double B[2] = {0.0, 1.0/imp[0].M};

    matrix_exp(A, Ad);
    imp_calc_Bd(Ad, A, B, Bd);

    for(int i = 0; i < BUFFER_SIZE; i++)
    {
    	imp[i].Ad = Ad;
    	imp[i].Bd = Bd;
    }

    printf("Ad: %.4f, %.4f, %.4f, %.4f\n", Ad[0], Ad[1], Ad[2], Ad[3]);
    printf("Bd: %.4f, %.4f\n", Bd[0], Bd[1]);

	return 0;
}
