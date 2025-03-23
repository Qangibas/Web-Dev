def alarm_clock(day, vacation):
  if(not vacation):
    if(day >= 1 and day <= 5):
      return "7:00"
    else:
      return "10:00"
  else:
    if(day == 0 or day == 6):
      return "off"
    else:
      return "10:00"
