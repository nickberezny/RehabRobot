#include <stdbool.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <poll.h>
#include <signal.h>
#include <time.h> 
#include <regex.h>
#include <stdio.h>


struct socket_data {
	int server_fd, new_socket, valread;
    struct sockaddr_in address;
    int opt;
    int addrlen;
};

struct impStruct {

	//admittance control parameters 
	double xk, vk, fk;
	double fdes, xdes, vdes;
	double xa, va;
	double P, D;
	double *Ad, *Bd;
	double cmd;
	struct timespec start_time;
	struct timespec end_time;
    struct timespec step_time;
    double wait_time;

	//other sensors 
	int LSF[2];
	int LSB[2];
	int IR;

	//Daq 
	char * aNames;
	int * aWrites;
	int * aNumValues;
	double * aValues;
	int errorAddress;

	//data log
	FILE * fp;

};

struct regexMatch {
	char *SET;
	char *P;
	char *D;
	char *xdes;
};


void *controller(void * d);
void *server(void * d);
void *logger(void * d);
int init_daq();

bool init_thread(pthread_attr_t * attr, struct sched_param * param, int priority);
bool init_sock(struct socket_data * sock);
void init_log(char * filename);

void imp_struct_to_json(struct impStruct * imp, double k, double b, char * json, size_t len);
size_t imp_length_json(struct impStruct * imp, double k, double b);


