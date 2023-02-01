from abc import ABC, abstractmethod

# Polimorfismo com interface
# Classe abstrata

# Uma classe abstrata é aquela que não pode possuir instâncias
# a partir dela, existindo apenas para ser herdada.

# Para criar uma classe abstrata em Python, basta criar uma classe que herda
# de abc.ABC:

# from abc import ABC


# class Database(ABC):
#     pass


# Métodos abstratos


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


# Mix de classes abstratas
# Uma classe abstrata pode herdar de outra classe abstrata, e então pode ou não
# implementar os métodos abstratos da superclasse. A primeira classe não
# abstrata na hierarquia deve implementar todos os métodos abstratos que ainda
# não tiverem sido implementados por uma de suas superclasses.

# Interface
#  Em Python são apenas classes abstratas comuns que são herdadas por classes
# normais.
# A diferença de uma classe abstrata para uma interface é que uma classe
# abstrata pode possuir métodos que as subclasses irão herdar e reaproveitar,
# enquanto que a interface é só um contrato para definir métodos que devem ser
# implementados.


def minha_func(database: Database):  # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("SELECT * FROM")
    else:
        print(f"{database} não é um Database válido")


db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")
