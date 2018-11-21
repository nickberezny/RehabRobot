daq: 
	gcc imp_daq_test.c -o daq_test -lpthread -lLabJackM -ljansson
	sudo ./daq_test
	rm daq_test

calibrate: 
	gcc calibrate_sensors.c -o calibrate -lpthread -lLabJackM -ljansson
	sudo ./calibrate
	rm calibrate

controller: 
	gcc controller_test.c -o controller -lpthread -lLabJackM -ljansson
	sudo ./controller
	rm controller

motor: 
	gcc motor_test.c -o motor -lpthread -lLabJackM -ljansson
	sudo ./motor
	rm motor

command: 
	gcc command.c -o command -lpthread -lLabJackM -ljansson
	sudo ./command
	rm command

encoder: 
	gcc encoder_test.c -o encoder -lpthread -lLabJackM -ljansson
	sudo ./encoder
	rm encoder

clock: 
	gcc clock_test.c -o clock_test -lpthread -lLabJackM -ljansson
	sudo ./clock_test
	rm clock_test

data: 
	gcc data_test.c -o data_test -lpthread -lLabJackM -ljansson
	sudo ./data_test
	rm data_test

archive_dont_run:
	sudo ip route del default via 192.168.25.1 dev eno1
	sudo ip route add default via 192.168.25.1 dev eno1
	gcc -I/usr/include/openssl/ imp_server.c -o serve -lssl -lwebsockets