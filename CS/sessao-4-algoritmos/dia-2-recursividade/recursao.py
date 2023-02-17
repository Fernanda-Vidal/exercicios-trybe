def countdown(n):
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


countdown(5)


# Nome da função e parâmetro:
#     Condição de parada

#     Chamada de si mesma

# 1. Declaramos uma função com um parâmetro.
# 2. Dentro da função criada, definimos qual é a condição de parada da função.
# 3. A condição de parada faz uma comparação entre o valor da condição com o
# parâmetro que a função está recebendo. Caso a condição não se satisfaça, a
# função é chamada novamente com um novo parâmetro. Caso contrário a execução
# para na condição de parada.
