import matplotlib.pyplot as plt

data = [0]*100000
i = 0

file  = open('force_sensor_data.txt', 'r')
print file.readline()

for line in file:
	if line[0] == 'F':
		break
	data[i] = float(line)
	i += 1

plt.plot(data[0:i-1])
plt.ylabel('Force Data at 0lb (V)')
plt.xlabel('Sample')
plt.show()

data = [0]*100000
j = i + 1

for line in file:
	if line[0] == 'F':
		break
	data[j-1] = float(line)
	j += 1

plt.plot(data[i+1:j-1])
plt.ylabel('Force Data at 1lb (V)')
plt.xlabel('Sample')
plt.show()