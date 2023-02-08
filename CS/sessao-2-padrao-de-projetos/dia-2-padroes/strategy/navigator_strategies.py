from abc import ABC, abstractmethod


class AbstractStrategy(ABC):
    @abstractmethod
    def build_route(departure: str, arrival: str):
        ...


class WalkingStrategy(AbstractStrategy):
    @staticmethod
    def build_route(departure: str, arrival: str):
        return f"Rota A PÉ saindo de {departure} para {arrival}"


class BikingStrategy(AbstractStrategy):
    @staticmethod
    def build_route(departure: str, arrival: str):
        return f"Rota de BIKE saindo de {departure} para {arrival}"


class BusStrategy(AbstractStrategy):
    @staticmethod
    def build_route(departure: str, arrival: str):
        return f"Rota de ÔNIBUS saindo de {departure} para {arrival}"


class CarStrategy(AbstractStrategy):
    @staticmethod
    def build_route(departure: str, arrival: str):
        return f"Rota de CARRO saindo de {departure} para {arrival}"
