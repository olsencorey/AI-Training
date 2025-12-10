def selection_sort(input_array):
    arr = input_array[:]
    n = len(arr)
    for i in range(n - 1):
        min_val = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_val]:
                min_val = j
        arr[i], arr[min_val] = arr[min_val], arr[i]
    return arr
    


print(selection_sort([33, 1, 89, 2, 67, 245]))
print(selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3]))
print(selection_sort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
