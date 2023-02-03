from strategy import ItauStrategy
from strategy import SantanderStrategy
from strategy import BradescoStrategy


class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)


Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)
