# Toda vez que chamamos uma função em um programa, o sistema operacional reserva memória para as variáveis e parâmetros da função;
# Sempre quando uma função é executada, ela é guardada na pilha;
# Quando uma função termina de ser executada, ela sai da pilha.


def saudacao():
    print("Oi")


def despedida():
    print("Tchau")


def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()


init()

# exercicio


def recursao_soma(n):
    if n == 0:
        return 0
    else:
        return n + recursao_soma(n - 1)


print(recursao_soma(4))
