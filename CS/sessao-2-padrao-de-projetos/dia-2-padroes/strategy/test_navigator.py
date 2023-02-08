import navigator
import navigator_strategies

# from strategy.navigator_strategies import (
#     WalkingStrategy,
#     BikingStrategy,
#     BusStrategy,
#     CarStrategy,
# )
import pytest


@pytest.fixture(scope="session")
def navigator_instance():
    return navigator.Navigator()


# Injeção de dependência - eu passo a lógica como parâmetro


# def test_default_navigation_route(navigator_instance: navigator.Navigator):
#     with pytest.raises(ValueError, match="Estratégia 'fake' desconhecida"):
#         navigator_instance.build_route("BH", "RJ", "fake")


def test_walking_navigation_route(navigator_instance: navigator.Navigator):
    expected = "Rota A PÉ saindo de BH para RJ"
    assert expected == navigator_instance.build_route(
        "BH", "RJ", navigator_strategies.WalkingStrategy
    )


def test_biking_navigation_route(navigator_instance: navigator.Navigator):
    expected = "Rota de BIKE saindo de BH para RJ"
    assert expected == navigator_instance.build_route(
        "BH", "RJ", navigator_strategies.BikingStrategy
    )


def test_bus_navigation_route(navigator_instance: navigator.Navigator):
    expected = "Rota de ÔNIBUS saindo de BH para RJ"
    assert expected == navigator_instance.build_route(
        "BH", "RJ", navigator_strategies.BusStrategy
    )


def test_car_navigation_route(navigator_instance: navigator.Navigator):
    expected = "Rota de CARRO saindo de BH para RJ"
    assert expected == navigator_instance.build_route(
        "BH", "RJ", navigator_strategies.CarStrategy
    )
