class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        # Neste cenário, em vez de fazermos IF e else... podemos usar
        # o dicionário conseguimos acessar obter o valor a partir da chave
        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


# Exercícios de fixação
# Crie uma segunda classe decorator que contemple os números em inglês:


class Calculator:
    def __init__(self, calculadoraDecorada):
        self.calculadoraDecorada = calculadoraDecorada

    def convertEnglish(self, numero):
        if not isinstance(numero, str):
            return numero

        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
        }.get(numero)

    # def converterNumero(self, numero):
    #     return self.calculadoraDecorada.converterNumero(
    #         self.convertEnglish(numero)
    #     )

    def soma(self, x, y):
        return self.calculadoraDecorada.soma(
            self.convertEnglish(x), self.convertEnglish(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    calculadora.soma(10, 20)

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    calculator = Calculator(calculadoraDecorada)

    print("'oito' + 'dois' =", calculadoraDecorada.soma("oito", "dois"))
    print(calculadoraDecorada.soma(5, 8))
    print(calculadoraDecorada.soma("cinco", "oito"))

    print("in english", calculator.soma("one", "two"))
    print("in english", calculator.soma("nine", "two"))
    print("english", calculator.soma("dois", "um"))  # Não deu certo.
