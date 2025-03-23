def string_match(a, b):
    shorter = min(len(a), len(b))
    cnt = 0
    for i in range(shorter-1):
        aSub = a[i:i+2]
        bSub = b[i:i+2]
        if (aSub == bSub):
            cnt += 1
    return cnt