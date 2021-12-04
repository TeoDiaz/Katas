f = open("day1.txt", "r")

list = f.read()
list_nums = map(int, list.split("\n"))


increase = 0
past_sum = 0
next_sum = 0

for indx, val in enumerate(list_nums):
    if(indx < len(list_nums) - 3):
        past_sum = val + list_nums[indx+1] + list_nums[indx + 2]
        next_sum = list_nums[indx + 1] + list_nums[indx+2] + list_nums[indx + 3]
        if(past_sum < next_sum):
            increase += 1

print(increase)
