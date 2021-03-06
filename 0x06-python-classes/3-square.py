#!/usr/bin/python3
class Square:
    __size = 0

    def __init__(self, size=0):
        """Initialize class."""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Square area."""
        return (self.__size * self.__size)
