from factory_pattern.user_model import User
import factory

factory.Faker._DEFAULT_LOCALE = "pt_BR"


class UserFactory(factory.Factory):
    class Meta:
        model = User

        full_name = factory.Faker("name")
        email = factory.Faker("email")
        password = factory.Faker("password")
