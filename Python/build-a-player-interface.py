import random
from abc import ABC, abstractmethod

class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self):
        move = random.choice(self.moves)
        new_position = (self.position[0] + move[0], self.position[1] + move[1])
        self.position = new_position
        self.path.append(self.position)
        return self.position

    @abstractmethod
    def level_up(self):
        """Must be implemented by subclasses to increase the player's abilities"""
        pass

class Pawn(Player):
    def __init__(self):
        super().__init__()
        self.moves = [
            (0, 1), (0, -1), (-1, 0), (1, 0)
        ]
    
    def level_up(self):
        self.moves += [
            (1, 1), (1, -1), (-1, -1), (-1, 1),
        ]

if __name__ == '__main__':
    p = Pawn()
    print(p.make_move())
