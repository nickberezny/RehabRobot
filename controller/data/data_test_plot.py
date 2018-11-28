import csv
import math
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

#reads csv file
#must have one header row with text, followed only by numbers

data_len = 0
colours = ['blue','red','black','green','blue','red','black','green','blue','red','black','green','blue','red','black','green']
time = ""

#read data csv 
with open('Wed_Nov_28_15-35-30_2018_data.txt', 'r') as csvfile:
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

j = 0
p = [[] for l in range(10)]
k = 0

while(data_len > 0):

	p[k] = plt.figure(k, figsize=(12, 12),facecolor='w', edgecolor='k')
	plt.suptitle('Rehab Robot Trial Data \n' + time[0], fontsize=14)
	gs = gridspec.GridSpec(2,2)
	index = 4

	if(data_len < 4):	 index = data_len
	for i in range(index):
		ax = plt.subplot(gs[i%2,math.floor(i/2)])
		ax.set_xlabel('Step Number')
		ax.set_ylabel(ylabel[j])
		ax.plot(y[j], color=colours[j])
		data_len = data_len - 1
		j = j + 1

	#save figure as png under data folder, with the time variable as the name
	p[k].savefig(str(k) + '_' + time[0].replace(" ", "_").replace(":",".") + '.png')
	#p[k].show()

	k = k + 1

