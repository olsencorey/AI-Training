def add_time(start, duration, starting_day_of_week=''):
    
    # Split the start string into time and period (AM/PM)
    time_parts = start.strip().split()
    time_component = time_parts[0]
    period = time_parts[1]

    # Extract hours and minutes
    hours, minutes = map(int, time_component.split(':'))
    
    # Convert to 24-hour format
    if period.upper() == "PM" and hours != 12:
        hours += 12
    elif period.upper() == "AM" and hours == 12:
        hours = 0

    print(f'Start time: {hours}:{minutes}')

    # Split the duration into hours and minutes
    dur_hours, dur_mins = map(int, duration.split(':'))

    print(f'Duration: {dur_hours}:{dur_mins}')

    # Add minutes
    total_minutes = minutes + dur_mins

    # Handle overflow into hours
    extra_hours = total_minutes // 60
    total_minutes = total_minutes % 60

    # Add hours
    total_hours = hours + dur_hours + extra_hours

    # Determine number of days
    days = total_hours // 24
    total_hours = total_hours % 24

    print(f'Days: {days}, Hours: {total_hours}, Minutes: {total_minutes}')

    # Convert back to AM/PM
    new_time = ''
    if total_hours >= 12:
        total_hours = total_hours % 12 if total_hours > 12 else total_hours
        new_time = f'{total_hours}:{total_minutes:02d} PM'
    else:
        if total_hours == 0:
            total_hours = 12
        new_time = f'{total_hours}:{total_minutes:02d} AM'

    # Figure out the days if passed in
    if starting_day_of_week:
        new_time += ', ' + day_of_week(starting_day_of_week, days)

    if days > 1:
        new_time += f' ({days} days later)'
    elif days == 1:
        new_time += ' (next day)'
    
    return new_time  

def day_of_week(start_day, days_to_advance):
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    start_day_lower = start_day.strip().lower()
     
    day_map = {day.lower(): index for index, day in enumerate(days)}

    start_index = day_map[start_day_lower]
    new_index = (start_index + days_to_advance) % 7

    return days[new_index]

if __name__ != '_main_':
    print(add_time('12:00 PM', '0:00', 'tuesday'))

** end of main.py **

