def arithmetic_arranger(problems, show_answers=False):
    if len(problems) > 5:
        return "Error: Too many problems."

    top_operand = ''
    bot_operand = ''
    dashes = ''
    total_row = ''
    for i, prob in enumerate(problems):
        parts = prob.split()
        if parts[1] != '+' and parts[1] != '-':
            return "Error: Operator must be '+' or '-'."
        
        if not parts[0].isdigit() or not parts[2].isdigit():
            return 'Error: Numbers must only contain digits.'
        
        if len(parts[0]) > 4 or len(parts[2]) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        if len(parts[0]) > len(parts[2]):
            top_operand += "  " + parts[0]
            bot_operand += parts[1] + " " + parts[2].rjust(len(parts[0]))
        elif len(parts[2]) > len(parts[0]):
            top_operand += "  " + parts[0].rjust(len(parts[2]))
            bot_operand += parts[1] + " " + parts[2]
        else:
            top_operand += "  " + parts[0]
            bot_operand += parts[1] + " " + parts[2]

        dashes += create_dashes(parts[0], parts[2])
        if show_answers:
            total = calculate(int(parts[0]), int(parts[2]), parts[1])
            if total < 0 or len(str(total)) > max(len(parts[0]), len(parts[2])):
                total_row += " " + str(total)
            else:
                total_row += "  " + str(total)
        
        if i != len(problems) - 1:
            top_operand += padding()
            bot_operand += padding()
            dashes += padding()
            if show_answers:
                total_row += padding()
    
    problems = top_operand + "\n" + bot_operand + "\n" + dashes
    if show_answers:
        problems += "\n" + total_row
    return problems

def calculate(num1, num2, operator):
    operations = {
        '+': lambda: num1 + num2,
        '-': lambda: num1 - num2,}
    return operations[operator]()

def padding():
    return " " * 4

def create_dashes(str1, str2):
    max_len = max(len(str1), len(str2))
    return "-" * (max_len + 2)

print(f'\n{arithmetic_arranger(["3 + 855", "988 + 40"], True)}')

** end of main.py **

