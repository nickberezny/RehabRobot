t0 = Data(1,1) + Data(1,2)/1000000000
t = (Data(:,1) + Data(:,2)./1000000000) - t0;

f = Data(:,8);
v = Data(:,5);
x = Data(:,3) ;
xd = Data(:,10);
vd = Data(:,11);

%filter v and f
fc = 1; %Cut off frequency
fs = 1000; %Sampling rate (1kHz)
[b,a] = butter(6,fc/(fs/2));

v_filt = filter(b,a,v);
f_filt = filter(b,a,f);

%{
figure
plot(t(1000:length(t)), f_filt(1000:length(t)))
figure
plot(t(1000:length(t)), f(1000:length(t)))
%}

error = xd - x;
total_error = mean(abs(error(1:length(error)-1)))

effort = f.*v;
total_effort = mean(abs(effort(1:length(effort)-1)))

figure 
hold on 
a = 0;
i = 2;
n = 1;

stroke = struct;

stroke(n).down_f = [];
stroke(n).down_x = [];
stroke(n).up_x = []; 
stroke(n).down_x = [];

for(i = 2:length(x))
    if(x(i) <= x(i-1))
        
        if(a == 2) 
            plot(stroke(n).down_x,stroke(n).down_f,'r')
            n = n + 1;
            stroke(n).down_f = [];
            stroke(n).down_x = [];
            stroke(n).up_x = []; 
            stroke(n).up_f = [];
        end
        
        a = 1;
        stroke(n).up_f = [stroke(n).up_f,f(i)];
        stroke(n).up_x = [stroke(n).up_x,x(i)];
        
    else
        if(a == 1) 
            plot( stroke(n).up_x, stroke(n).up_f,'b')

        end
        a = 2;
        stroke(n).down_f = [stroke(n).down_f,f(i)];
        stroke(n).down_x = [stroke(n).down_x, x(i)];
    end
end



%plot(up_x,up_f)
%hold on
%plot(down_x,down_f)
