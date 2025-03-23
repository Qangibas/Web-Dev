x = int(input())
arr = list(map(int, input().split(' ')))
cnt = 0

for i in range(x):
    if(arr[i] > 0):
        cnt += 1
print(cnt)