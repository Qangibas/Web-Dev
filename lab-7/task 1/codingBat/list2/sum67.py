def sum67(nums):
    count = 0
    flag = False
    
    for n in nums:
        if(n == 6):
            flag = True
            continue
        if(n == 7 and flag):
            flag = False
            continue
        if(not flag):  
            count += n
    
    return count