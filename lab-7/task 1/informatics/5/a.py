import math

def minFromFour(a, b, c, d):
    arr = [a, b, c, d]
    min = math.inf
    for i in arr:
        if(i < min):
            min = i
    return min

arr = list(map(int, input().split(' ')))

print(minFromFour(arr[0], arr[1], arr[2], arr[3]))