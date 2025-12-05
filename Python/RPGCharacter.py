full_dot = '●'
empty_dot = '○'

def create_character(character_name, strength, intelligence, charisma):
    if not isinstance(character_name, str):
        return 'The character name should be a string'

    if len(character_name) > 10:
        return 'The character name is too long'
    
    if " " in character_name:
        return 'The character name should not contain spaces'

    if not (isinstance(strength, int) and isinstance(intelligence, int) and isinstance(charisma, int)):
        return 'All stats should be integers'
    
    if strength < 1 or intelligence < 1 or charisma < 1:
        return 'All stats should be no less than 1'
    
    if strength > 4 or intelligence > 4 or charisma > 4:
        return 'All stats should be no more than 4'
    
    stat_sum = strength + intelligence + charisma
    if stat_sum != 7:
        return 'The character should start with 7 points'

    strength_line = "STR " + get_dots(strength) + "\n"
    intelligence_line = "INT " + get_dots(intelligence) + "\n"
    charisma_line = "CHA " + get_dots(charisma)
    
    return character_name + "\n" + strength_line + intelligence_line + charisma_line

def get_dots(stat):
    return (full_dot * stat) + (empty_dot * (10 - stat))



print(create_character("ren", 4, 2, 1))
