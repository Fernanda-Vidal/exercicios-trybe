import pytest
from codigo import is_odd, divide


def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2
    ) is False

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(3, 0)

# get_most_ordered_dish_per_costumer é uma função que retorna o prato mais pedido por uma
# determinada pessoa cliente, considerando que os pedidos estão em uma lista.

# get_order_frequency_per_costumer é uma função que retorna a frequência que uma determinada
# pessoa cliente pede um determinado prato, considerando que os pedidos estão em uma lista.


# uma fixture utilizando a biblioteca pytest
# é definida utilizando a sintaxe abaixo

