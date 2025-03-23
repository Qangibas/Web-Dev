def array123(nums):
  if(len(nums) < 3):
    return False
  for i in range(len(nums) + 1):
        for j in range(i):
            if(nums[j: i] == [1,2,3]):
              return True
  return False
