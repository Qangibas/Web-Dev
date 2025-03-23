#print(int(input()[::-1])) <=====> solved in 1 line but we need for loop so:

x = input()
s = ""
for i in x[::-1]:
    s += i
print(int(s))
