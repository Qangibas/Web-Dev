from math import sqrt

x, y = int(input()), int(input())
for i in range(x, y):
    if(sqrt(i) == int(sqrt(i))):
        print(i, end=" ") 