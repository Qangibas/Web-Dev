def squirrel_play(temp, is_summer):
  if(temp >= 60 and temp <= 90):
    return True
  elif(is_summer and temp <= 100 and temp >= 60):
    return True
  else:
    return False
