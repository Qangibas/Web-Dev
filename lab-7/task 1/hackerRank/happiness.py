n, m = map(int, input().split())
myArr = list(map(int, input().split()))
happ, sad = 0, 0
aSet = set(map(int, input().split()))
bSet = set(map(int, input().split()))
happ = len([x for x in myArr if x in aSet])
sad = len([x for x in myArr if x in bSet])
print(happ - sad)