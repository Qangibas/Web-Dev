x = int(input())
arr = list(map(int, input().split(' ')))

for i in range(x - 1, -1, -1):
    print(arr[i], end=' ')
