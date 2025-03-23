def array_front9(nums):
  if(9 not in  nums):
     return False
  if(len(nums) < 5):
    return True
  elif(nums.index(9) + 1 < 5):
      return True
  else:
    return False
