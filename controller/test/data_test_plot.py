import csv
import math
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

#reads csv file
#must have one header row with text, followed only by numbers

data_len = 0
colours = ['blue','red','black','green']

with open('data_test.txt', 'r') as csvfile:
	data = csv.reader(csvfile, delimiter=',', quotechar='|')
	for row in data:
		i = 0
		if row[0].isdigit():
			for point in row:
				y[i].append(float(point))
				i = i +1
		else: 
			#should be the header
			data_len = len(row)
			y = [[] for j in range(data_len)]
			ylabel = [['No Label Found'] for jj in range(data_len)]
			for point in row:
				ylabel[i] = point
				i = i +1
			

plt.figure()

gs = gridspec.GridSpec(2,math.ceil(data_len/2))

for i in range(data_len):
	ax = plt.subplot(gs[i%2,math.floor(i/2)])
	ax.set_xlabel('time step (ms)')
	ax.set_ylabel(ylabel[i])
	ax.plot(y[i], color=colours[i])

plt.show()
