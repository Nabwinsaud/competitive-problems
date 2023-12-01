numbers = [1, 2, 2, 1]


output = list(map(str, numbers))
# print(list(map(str, numbers)))

print(output == output[::-1])
