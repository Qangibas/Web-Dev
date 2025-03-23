def max_end3(nums):
  if(nums[0] > nums[-1]):
    for i in range(3):
      nums[i] = nums[0]
    return nums
  else:
    for i in range(3):
      nums[i] = nums[-1]
    return nums