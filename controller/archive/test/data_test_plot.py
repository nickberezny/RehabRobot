import csv
import math
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

#reads csv file
#must have one header row with text, followed only by numbers

data_len = 0
colours = ['blue','red','black','green']
time = ""

#read data csv 
with open('data_test.txt', 'r') as csvfile:
	data = csv.reader(csvfile, delimiter=',', quotechar='|')
	
	#read time (first line)
	time = next(data)

	#read header (second line)
	header = next(data)
	data_len = len(header)
	y = [[] for j in range(data_len)]
	ylabel = [['No Label Found'] for jj in range(data_len)]
	i = 0
	for point in header:
		ylabel[i] = point
		i = i + 1

	#read data 
	for row in data:
		i = 0
		if row[0].isdigit():
			for point in row:
				y[i].append(float(point))
				i = i + 1
			
			
#create single plot with data as subplots 
plt.figure(figsize=(12, 12),facecolor='w', edgecolor='k')
plt.suptitle('Rehab Robot Trial Data \n' + time[0], fontsize=14)

gs = gridspec.GridSpec(2,math.ceil(data_len/2))

for i in range(data_len):
	ax = plt.subplot(gs[i%2,math.floor(i/2)])
	ax.set_xlabel('time step (ms)')
	ax.set_ylabel(ylabel[i])
	ax.plot(y[i], color=colours[i])

#save figure as png under data folder, with the time variable as the name
plt.savefig('data/' + time[0].replace(" ", "_").replace(":",".") + '.png')
plt.show()

