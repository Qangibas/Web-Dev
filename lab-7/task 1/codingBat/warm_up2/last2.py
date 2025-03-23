def last2(str):
  cnt = 0
  sub = str[len(str) - 2:len(str)]
  for i in range(len(str)-len(sub)+1):
    if str[i:i+len(sub)] == sub:
        cnt += 1 
  return cnt - 1
