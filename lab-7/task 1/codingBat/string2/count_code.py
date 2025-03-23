def count_code(str):
    count=0
    for i in range(len(str) - 3):
        a = str[i: i + 2]
        b = str[i + 3]
        if(a == "co" and b == 'e'):
            count += 1
    return count