n = int(input())
l = (n*2) - 1

for i in range(l):
    d = n-1-abs(n-1-i)
    for j in range(4*n-3):
        if j % 2 == 0 and abs((j-(l - 1))//2) <= d:
            print(chr(97+n-1-(d-abs((j-(l - 1))//2))), end="")
        else:
            print("-", end="")
    print("\n")

#97 122