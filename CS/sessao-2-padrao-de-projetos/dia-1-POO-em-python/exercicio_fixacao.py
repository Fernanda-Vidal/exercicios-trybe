class Ventilador:
    def __init__(self, cor, potencia, tensão, preco) -> None:
        self.preco = preco
        self.__cor = cor
        self._potencia = potencia
        self._tensao = tensão
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def cor(self):
        return self.__cor

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
    
    def desligar (self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    

ventilador_preto = Ventilador("Preto", 250, 220, 100)