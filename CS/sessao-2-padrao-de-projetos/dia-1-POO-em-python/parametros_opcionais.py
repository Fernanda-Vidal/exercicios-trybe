#Parâmetros opcionais
# Apesar de não existir a sobrecarga, é comum a existência de 
# parâmetros opcionais nas funções e métodos, o que a depender do uso
# pode levar a um funcionamento similar ao de sobrecarga.

class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)