def quick_sort(input_list):
    if len(input_list) <= 1:
        return input_list[:]

    pivot = input_list[0]
    less = [x for x in input_list if x < pivot]
    equal = [x for x in input_list if x == pivot]
    greater = [x for x in input_list if x > pivot]
 
    return quick_sort(less) + equal + quick_sort(greater)

print(quick_sort([20, 3, 14, 1, 5]))
print(quick_sort([83, 4, 24, 2]))
print(quick_sort([4, 42, 16, 23, 15, 8]))
print(quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56]))
