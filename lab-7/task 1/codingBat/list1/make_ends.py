def make_ends(nums):
  if(len(nums) > 2):
    while(len(nums) != 2):
      nums.pop(1)
    return nums
  elif(len(nums) == 2):
    return nums
  else:
    nums.extend(nums)
    return nums
