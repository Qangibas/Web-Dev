x = input()
ans = 0
for i in range(len(x)):
    if(int(x[i]) == 1):
        ans += 2 ** (len(x) - i - 1) 
print(ans)