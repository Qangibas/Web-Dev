def power(a, n):
    result = 1
    for i in range(n):
        result *= a
    return result

x, y = map(int, input().split())

print(power(x, y))
