run: 
	sudo gcc adm_main.c adm_init.c adm_calibration.c adm_communication.c adm_discretize.c adm_home.c adm_params.c adm_run.c -o run_robot -lpthread -lLabJackM -ljansson
	sudo ./run_robot
	abl123
	rm run_robot

build-dist:
	gcc imp_run.c imp_init.c imp_utilities.c -o ../../RehabRobot/controller/run_robot -lpthread -lLabJackM -ljansson
