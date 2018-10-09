run: 
	gcc imp_run.c imp_init.c imp_utilities.c imp_controller.c -o run_robot -lpthread -lLabJackM -ljansson
	sudo ./run_robot
	abl123
	rm run_robot

build-dist:
	gcc imp_run.c imp_init.c imp_utilities.c -o ../../RehabRobot/controller/run_robot -lpthread -lLabJackM -ljansson

archive_dont_run:
	sudo ip route del default via 192.168.25.1 dev eno1
	sudo ip route add default via 192.168.25.1 dev eno1
	gcc -I/usr/include/openssl/ imp_server.c -o serve -lssl -lwebsockets