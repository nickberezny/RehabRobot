import sys
import csv
import math
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

#reads csv file
#must have one header row with text, followed only by numbers
data_len = 0
colours = ['blue','red','black','green','blue','red','black','green','blue','red','black','green','blue','red','black','green']
time = ""
freq = ""

num_of_stages = int(sys.argv[2]) #total number of stages / experiments
stage_number = int(sys.argv[3]) - 1 #stage number to plot

#read data csv 
#with open('Fri_Feb_22_09-58-22_2019_data.txt', 'r') as csvfile:
with open(str(sys.argv[1]), 'r') as csvfile: #open file given as cmd line argument
	data = csv.reader(csvfile, delimiter=',', quotechar='|')
	
	time = next(data) #read time (first line)
	freq = next(data) #read frequency (second line)

	#read header (second line)
	header = next(data)
	data_len = int(len(header))
	y = [[[] for j in range(data_len)] for k in range(num_of_stages)]
	ylabel = [['No Label Found'] for jj in range(data_len)] 
	i = 0
	for point in header:
		ylabel[i] = point
		i = i + 1

	#read data 
	j = 0
	for row in data:
		i = 0
		
		if row[0].isdigit():
			check = 0;
			for point in row:
				check = 1
				y[j][i].append(float(point))
				i = i + 1
		else: 
			j = j + 1
			print("break")
			
step_time = [[] for j in range(len(y[0][0]))]
step_time[0] = 0

print(len(y[stage_number][1])-1)

for i in range(len(y[stage_number][0])-1):
	step_time[i+1] = 1000*(y[stage_number][0][i+1] - y[stage_number][0][i]) + (y[stage_number][1][i+1] - y[stage_number][1][i])/1000000

y[stage_number][1] = step_time

avg_step = sum(y[stage_number][1])/len(y[stage_number][1])
print('Average step time (ms): ' + str(avg_step))

filt_order = 15
v_filt = [[] for j in range(len(y[stage_number][3]) - filt_order)]
for i in range(len(y[stage_number][3]) - filt_order):
	end = i+filt_order-1
	v_filt[i] = sum(y[stage_number][3][i:i+filt_order-1]) / float(filt_order)

y[stage_number][4] = v_filt



#create single plot with data as subplots 
j = 1
p = [[] for l in range(10)]
k = 0
data_len = data_len - 1;
ylabel[1] = 'Time Step (ms)'

while(data_len > 0):

	p[k] = plt.figure(k, figsize=(12, 12),facecolor='w', edgecolor='k')
	plt.suptitle('Rehab Robot Trial Data \n' + time[0] + '\n' + freq[0], fontsize=14)
	gs = gridspec.GridSpec(2,2)
	index = 4

	if(data_len < 4):	 index = data_len

	

	for i in range(index):
		
		ax = plt.subplot(gs[i%2,int(math.floor(i/2))])
		ax.set_xlabel('Step Number')
		ax.set_ylabel(ylabel[j])
		ax.plot(y[stage_number][j], color=colours[j])
		data_len = data_len - 1
		j = j + 1

	#save figure as png under data folder, with the time variable as the name
	p[k].savefig(str(k) + '_' + time[0].replace(" ", "_").replace(":",".") + '.png')
	#p[k].show()

	k = k + 1

plt.show()