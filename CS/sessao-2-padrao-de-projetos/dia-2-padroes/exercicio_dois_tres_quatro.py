from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable

# Exercício 2: Dado o código de um baralho e suas cartas, você deve
# transformá-lo em um iterador sequencial que fornece as cartas em sua ordem
# tradicional, começando de <A de copas> até <K de paus>.


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


# Exercício 3: Com o baralho tradicional pronto, implemente uma subclasse de
# Baralho chamada BaralhoInverso, que produz um iterador para fornecer as
# cartas na ordem inversa. Ou seja, sem embaralhar, a primeira carta deve ser
# o <K de paus> em vez do <A de copas>, como acontece na implementação atual.


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self.pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta


class BaralhoInverso(Iterable):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)


# Exercício 4: Agora que você tem duas formas diferentes de dar cartas para o
# seu baralho, refatore o código para não precisar mais de dois baralhos e
# dois iteradores isolados, mas sim usar um único iterador com duas
# estratégias diferentes de iteração.


class IteradorGeneric(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = 0

        def __next__(self):
            try:
                carta = self._cartas[self._pos]
            except IndexError:
                raise StopIteration()
            else:
                self._pos = self._sentido.proxima_carta(self._pos)
                return carta


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class BaralhoG(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorGeneric(self._cartas, self.estrategia)
