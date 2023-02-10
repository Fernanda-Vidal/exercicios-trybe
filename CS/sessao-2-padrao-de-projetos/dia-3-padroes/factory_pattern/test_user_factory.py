from factory_pattern.user_model import User
from factory_pattern.user_factory import UserFactory


def test_create_user():
    user = User("Zé Birita", "zebirita@email.com", "$zebirita$")

    assert user.full_name == "Zé Birita"
    assert user.email == "zebirita@email.com"
    assert user.password == "$zebirita$"


def test_login():

    user = UserFactory()

    assert user.login(user.email, user.password) is True
