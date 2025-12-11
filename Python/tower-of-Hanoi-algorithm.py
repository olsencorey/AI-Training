def hanoi_solver(total_disks):
    # rods: A (index 0), B (index 1), C (index 2)
    rods = [list(range(total_disks, 0, -1)),[],[]]
    lines = []

    def snapshot():
        lines.append(f"{rods[0]} {rods[1]} {rods[2]}")

    def move_disks(num, source, target, auxiliary):
        if num == 1:
            disk = rods[source].pop()
            rods[target].append(disk)
            snapshot()
        else:
            move_disks(num - 1, source, auxiliary, target)
            move_disks(1, source, target, auxiliary)
            move_disks(num - 1, auxiliary, target, source)
    
    snapshot()
    move_disks(total_disks, 0, 2, 1)
    return '\n'.join(lines)

#print(hanoi_solver(2))
#print(hanoi_solver(3))
#print(hanoi_solver(4))
print(hanoi_solver(5))
