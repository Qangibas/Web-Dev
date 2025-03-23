def caught_speeding(speed, is_birthday):
  if(not is_birthday):
    if(speed <= 60):
      return 0
    elif(speed <= 80):
      return 1
    else:
      return 2
  else:
    return caught_speeding(speed - 5, False)
  
