f = open("day1.txt", "r")

past = int(f.readline())

increase = 0

for x in f:
    x = int(x)
    if(x > past):
        increase += 1
    past = x

print(increase)
