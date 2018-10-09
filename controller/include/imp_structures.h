#include<stdbool.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <poll.h>
#include <signal.h>

struct game_data {
	int game;
	int mode;
	int intensity;
};

struct socket_data {
	int server_fd, new_socket, valread;
    struct sockaddr_in address;
    int opt;
    int addrlen;
};

struct impStruct {

	//impedance parameters

	//adaptive impedance params
	double x_trans;
	struct impPhysics * next;

	//virtual coupling params
	double k_coupling;
	double x_env;

	//position, velocity and acceleration of pedal
	double x;
	double dx;
	double xdes;
	double dxdes;
	
	double F; //force
	int limit; //limit switch
	int foot_sensor; //footplate IR sensor
	double cmd; //motor command

	struct socket_data socket_data;

	//FILE * logFile;
	
};

struct impPhysics {
	double x_trans;
	double k;
	double b;
	struct impPhysics * next;

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

void imp_simple_control(struct impStruct * imp, double k, double b);
void imp_adaptive_control(struct impStruct *imp);
void imp_coupling_control(struct impStruct * imp);

