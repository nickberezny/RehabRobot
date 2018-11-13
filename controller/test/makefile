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