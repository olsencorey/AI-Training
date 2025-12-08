import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for color, count in kwargs.items():
            self.contents.extend([color] * count)
    
    def draw(self, number_of_balls):
        if number_of_balls >= len(self.contents):
            # return all balls
            drawn_balls = self.contents.copy()
            self.contents.clear()
            return drawn_balls
        else:
            # randomly select balls without replacement
            drawn_balls = random.sample(self.contents, number_of_balls)
            # remove the balls
            for ball in drawn_balls:
                self.contents.remove(ball)
            return drawn_balls

    def __repr__(self):
        return f"Hat({self.contents})"
    
    def __str__(self):
        return f"Hat({self.contents})"


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successful_experiments = 0

    for _ in range(num_experiments):
        # get a new copy of hat so original isn't modified
        hat_new = copy.deepcopy(hat)
        # draw balls
        drawn_balls = hat_new.draw(num_balls_drawn)
        # count number of balls in sample
        num_balls = {}
        for ball in drawn_balls:
            num_balls[ball] = num_balls.get(ball, 0) + 1
        # check to make sure expected balls are in the drawn balls
        flag = True
        for color, count in expected_balls.items():
            if num_balls.get(color, 0) < count:
                flag = False
                break
        
        if flag:
            successful_experiments += 1
    return successful_experiments / num_experiments

if __name__ == '__main__':
    hat = Hat(black=6, red=4, green=3)
    print(hat)
    probability = experiment(hat, {'red':2, 'green':1}, 5, 2000)
    print(probability)

** end of main.py **

