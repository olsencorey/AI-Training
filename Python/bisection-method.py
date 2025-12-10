def square_root_bisection(number, tolerance=1e-6, max_iterations=100):
    if number < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')

    if number == 0 or number == 1:
        print(f'The square root of {number} is {number}')
        return number
    
    # set initial conditions

    if number < 1:
        low, high = 0, 1
    else:
        low ,high = 0, number

    for _ in range(max_iterations):
        mid = (low + high) / 2
        squared = mid ** 2

        if (high - low) <= tolerance:
            print(f'The square root of {number} is approximately {mid}')
            return mid

        if squared < number:
            low = mid
        else:
            high = mid

    print(f'Failed to converge within {max_iterations} iterations')
    return None

#print(square_root_bisection(0))
print(square_root_bisection(0.001, 1e-7, 50))
#print(square_root_bisection(0.25, 1e-7, 50))
#print(square_root_bisection(81, 1e-3, 50))
#print(square_root_bisection(225, 1e-7, 100))
#print(square_root_bisection(225, 1e-7, 10))
