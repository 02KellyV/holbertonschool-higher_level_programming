#!/usr/bin/python3
""" Base class Module"""


class Base:
    """ Base class """
    __nb_objects = 0
    id = 0

    def __init__(self, id=None):
        """ initialize """
        if id is None:
            Base.__nb_objects = Base.__nb_objects + 1
            self.id = self.__nb_objects
        else:
            self.id = id
