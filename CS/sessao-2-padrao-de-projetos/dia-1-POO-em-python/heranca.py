#  Herança é especializar o comportamento de uma classe, ou seja, a classe
# herdeira é tudo que a classe ascendente é e talvez um pouco mais!

class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


# Em Python, para declarar que um objeto herda as características de outro, 
# basta na declaração da classe “passarmos como parâmetro” a classe que será herdada.

class Batedeira(Eletrodomestico):
    pass


class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1)

        # ou ao invés e chamar a super classe explicitamente, podemos chamar o
        # método super() omitindo o self e nesse caso a chamada da linha 60 ficaria:
        super().faz_algo(valor=1)

b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1


# HERANÇA MULTI - NÍVEL
class C: # C 
    def x(self): # método de exemplo
        print(1)

class B(C): # B herda de C
    pass

class A(B): # A herda de B
    pass


a = A()
a.x()
# 1


# HERANÇA MULTIPLA
class A(B, C): 
    pass

#  Importante: o uso de herança múltipla é bastante desencorajado, 
# pois gera complexidade extra na hierarquia de classes. Isso exige maior 
# controle da pessoa desenvolvedora sobre o funcionamento implícito da linguagem, 
# podendo levar a comportamentos inesperados na aplicação.

