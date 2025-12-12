def dfs_n_queens(n):
    if not isinstance(n, int):
        return []
    
    if n < 1:
        return []

    queens = [-1] * n
    result = []

    def is_safe(row, col):
        for prev_row in range(row):
            prev_col = queens[prev_row]
            # same column
            if prev_col == col:
                return False
            
            # same diagonal
            if (abs(row - prev_row) == abs(col - prev_col)):
                return False
        
        return True
    
    def backtrack(row):
        if row == n:
            # found a solution, add to results and return
            result.append(list(queens))
            return
        
        for col in range(n):
            if is_safe(row, col):
                queens[row] = col
                backtrack(row + 1)
                queens[row] = -1
    
    backtrack(0)
    return result

print(len(dfs_n_queens(4)))
