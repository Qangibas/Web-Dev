def make_chocolate(small, big, goal):
    if(goal >= 5 * big):
        rem = goal - 5 * big
    else:
        rem = goal % 5
        
    if(rem <= small):
        return rem
    return -1