def end_other(a, b):
    s1 = a.lower()
    s2 = b.lower()
    if(len(s1) < len(s2)):
        return  s2.endswith(s1)
    else:
        return  s1.endswith(s2)