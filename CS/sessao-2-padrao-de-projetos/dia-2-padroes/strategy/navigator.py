from navigator_strategies import AbstractStrategy


class Navigator:
    def build_route(
        self, departure: str, arrival: str, strategy: AbstractStrategy
    ):
        try:
            return strategy.build_route(departure, arrival)
        except AttributeError:
            raise ValueError(f"Estratégia '{strategy}' desconhecida")
