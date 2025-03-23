
def minion_game(string):
    vows = ['A', 'O', 'I', 'E', 'U']
    stuScore, kevScore = 0, 0
    for i in range(len(string)):
        if(string[i] in vows):
            kevScore += len(string) - i
        else:
            stuScore += len(string) - i
    if(kevScore == stuScore):
        print("Draw")
    elif(stuScore > kevScore):
        print("Stuart " + str(stuScore))
    else:
        print("Kevin " + str(kevScore))
if __name__ == '__main__':
    s = input()
    minion_game(s)