# Tuplas nomeadas

from collections import namedtuple

# Definimos a tupla nomeada passando o nome dela e uma lista com os nomes dos
# atributos
Address = namedtuple("Address", ["street", "number", "district"])

# Criamos "instâncias" da tupla tal como criamos instâncias de classes normais
address1 = Address("Street", 0, "District")
# Podemos nomear os parâmetros para passá-los fora de ordem
address2 = Address("Street2", district="District2", number=1)

# Podemos acessar utilizando a sintaxe `objeto.atributo`
print(address1.street, address1.number, address1.district)
# Street 0 District

# Observe que o acesso por índice numérico ainda funciona, pois são tuplas
print(address1[0], address1[1], address1[2])
# Street 0 District

address1.district = "Aloha"  # ! AttributeError, pois tuplas são imutáveis
