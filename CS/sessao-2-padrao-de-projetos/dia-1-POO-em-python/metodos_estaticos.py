# Métodos estáticos
class Classe1:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe1()
Classe1.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Atributos de classe


class Classe2:
    atributo_da_classe = 1


objeto_1 = Classe2()
objeto_2 = Classe2()

print(Classe2.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe2.atributo_da_classe = 2
print(Classe2.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe2.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2

# Métodos de classe


class Classe:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3

# Como podemos ver, o acesso é feito de maneira transparente,
# sem precisar passar explicitamente o parâmetro cls.

# A propósito, tal como o self, cls é apenas uma convenção, podendo receber
# outros nomes. É comum confundir e escrever um classmethod que recebe self,
# o que não vai quebrar o programa, mas é importante saber que
# independentemente do nome o parâmetro será uma referência à classe, e não ao
# objeto.

# A diferença desse exemplo para o anterior é que acessar o método de classe a
# partir do objeto pode alterar atributos de classe
