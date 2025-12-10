class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, key):
        total = 0
        for char in key:
            total += ord(char)

        return total

    def add(self, key, value):
        hashed_key = self.hash(key)
        if hashed_key not in self.collection:
            self.collection[hashed_key] = {}
        self.collection[hashed_key][key] = value

    def remove(self, key):
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            nested_dict = self.collection[hashed_key]
            if key in nested_dict:
                del nested_dict[key]
                if not nested_dict:
                    del self.collection[hashed_key]

    def lookup(self, key):
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            nested_dict = self.collection[hashed_key]
            if key in nested_dict:
                return nested_dict[key]
        return None

ht = HashTable()

ht.add('chicken', 20)
ht.add('beef', 10)
ht.add('pork', 5)

print(ht.lookup('chicken'))
print(ht.lookup('beef'))
print(ht.lookup('fish'))

ht.remove('beef')

print(ht.lookup('beef'))

print(ht.lookup('chicken'))
print(ht.lookup('beef'))

