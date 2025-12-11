def verify_card_number(digits):
    clean = digits.replace(" ","").replace('-', '')
    if not clean or not clean.isdigit():
        return 'INVALID!'

    total = 0
    double = False
    for ch in reversed(clean):
        d = ord(ch) - 48
        if double:
            d *= 2;
            if d > 9:
                d -= 9;
        total += d
        double = not double
    if total % 10 == 0:
        return 'VALID!'
    else:
        return 'INVALID!'

print(verify_card_number('453914889'))
print(verify_card_number('4111-1111-1111-1111'))
print(verify_card_number('453914881'))
print(verify_card_number('1234 5678 9012 3456'))
