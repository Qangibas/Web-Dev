def xor(x, y):
    return bool(x ^ y)

x, y = map(int, input().split())
print( 1 if xor(x, y) == True else 0)