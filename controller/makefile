run: 
	sudo gcc imp_main.c imp_init.c imp_controller.c imp_math.c imp_utilities.c -o run_robot -lpthread -lLabJackM -ljansson
	sudo ./run_robot
	abl123
	rm run_robot

build-dist:
	gcc imp_run.c imp_init.c imp_utilities.c -o ../../RehabRobot/controller/run_robot -lpthread -lLabJackM -ljansson
