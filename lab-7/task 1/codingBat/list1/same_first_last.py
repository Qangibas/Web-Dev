def same_first_last(nums):
  if(len(nums)):
    return (True if nums[0] == nums[-1] else False)
  else:
    return False