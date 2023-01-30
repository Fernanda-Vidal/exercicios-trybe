class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

# O primeiro parâmetro, o self, representa a instância do objeto, 
# ou seja, tem acesso ao objeto na memória.

# Em muitas linguagens também é chamado de this, e como em Python é um 
# parâmetro explícito, você pode chamá-lo como quiser, mas self é 
# uma convenção adotada pela comunidade.

meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(preco=100, potencia=250, cor="Vermelho", tensao=220)

# É possível ter atributos que não precisam ser passados por 
# meio de parâmetros na chamada do construtor. Por exemplo, para o 
# booleano __ligado e o inteiro __velocidade, o construtor vai iniciá-los 
# sempre com os valores fixos (hard coded) False e 0, respectivamente.