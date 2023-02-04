# Middle Man
from dataclasses import dataclass


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District


# Geralmente dicas/anotações de tipo (type hints / type annotations) são
# utilizadas para especificar o tipo de dados dos atributos, neste caso ao
# invés de utilizarmos um valor padrão utilizamos a seguinte notação:

@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")
