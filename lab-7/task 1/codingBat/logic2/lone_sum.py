def lone_sum(a, b, c):
  if(a != b and b != c and a != c):
    return a + b + c
  elif(a == b and b == c):
    return 0
  else:
    if(a == b):
      return c
    elif(b == c):
      return a
    else:
      return b
