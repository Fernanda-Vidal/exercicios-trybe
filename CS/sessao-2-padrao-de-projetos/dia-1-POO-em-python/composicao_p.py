from poo_python import liquidificador_vermelho
import exercicio_fixacao

# Composição é atribuir o objeto de uma classe a um atributo da outra,
# gerando assim um relacionamento de pertencimento entre elas.

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None


    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        return f"""
        {self.nome} - possui {self.saldo_na_conta} em reais na sua conta.
        """

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} - possui um ventilador"
        return f"{self.nome} - não possui ventilador."

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
pessoa_desenvolvedora = Pessoa("Junior", 5000)
pessoa_desenvolvedora.comprar_ventilador(exercicio_fixacao.ventilador_preto)

print(pessoa_cozinheira)
print(pessoa_desenvolvedora)