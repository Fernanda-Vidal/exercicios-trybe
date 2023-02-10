from abc import ABC, abstractmethod
from datetime import datetime


class BaseServer(ABC):
    @abstractmethod
    def start(self):
        raise NotImplementedError

    @abstractmethod
    def end(self):
        raise NotImplementedError


class AbstractServerDecorator(BaseServer):
    def __init__(self, main_server) -> None:
        self._server_component = main_server


class Server(BaseServer):
    def __init__(self, name):
        self.name = name
        self.running = False

    def start(self):
        self.running = True
        print(f"O servidor <{self.name}> foi iniciado.")

    def end(self):
        self.running = False
        print(f"O servidor <{self.name}> foi parado.")


class SecurityServer(AbstractServerDecorator):
    def __init__(self, main_server):
        self._server_component = main_server

    def start(self):
        password = input("Digite sua senha:")
        if password == "1234":
            self._server_component.start()
        else:
            print("Senha incorreta para iniciar o servidor")

    def end(self):
        password = input("Digite sua senha:")
        if password == "1234":
            self._server_component.end()
        else:
            print("Senha incorreta para parar o servidor")


class TimedServer(AbstractServerDecorator):
    def start(self):
        self.__start_time = datetime.now()
        self._server_component.start()

    def end(self):
        self._server_component.end()
        total_time = datetime.now() - self.__start_time
        print(f"O servidor ficou ativo por {total_time} segundos")


if __name__ == "__main__":
    local_server = Server("Trybe-API")
    local_server.start()
    local_server.end()

    security_server = SecurityServer(local_server)
    security_server.start()
    security_server.end()

# Usando um decorator junto com outro
    timed_server = SecurityServer(TimedServer(local_server))
    timed_server.start()
    timed_server.end()
