daq: 
	gcc imp_daq_test.c -o daq_test -lpthread -lLabJackM -ljansson
	sudo ./daq_test
	rm daq_test

calibrate: 
	gcc calibrate_sensors.c -o calibrate -lpthread -lLabJackM -ljansson
	sudo ./calibrate
	rm calibrate

