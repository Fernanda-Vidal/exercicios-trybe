class User:
    def __init__(self, full_name: str, email: str, password: str):
        self.full_name = full_name
        self.email = email
        self.password = password

    def login(self, email, password):
        return email == self.email and password == self.password
