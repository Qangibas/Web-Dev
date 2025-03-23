def not_string(str):
  if("not" == str[0:3]):
    return str
  else:
    return " ".join(["not", str])
