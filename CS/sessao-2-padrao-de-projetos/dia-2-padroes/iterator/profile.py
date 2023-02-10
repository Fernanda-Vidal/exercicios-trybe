from datetime import date


class ProfileConnections:
    def __init__(self, friend_names: list):
        today_date = date.today()

        self.__friends = [
            {"name": friend_name, "date_added": today_date}
            for friend_name in friend_names
        ]

    def __iter__(self):
        return ProfileIterator(self.__friends)


class ProfileIterator:
    def __init__(self, iterable):
        self.__iterable = iterable
        self.index = 0

    def __next__(self):
        try:
            result = self.__iterable[self.index]
        except IndexError:
            raise StopIteration

        else:
            self.index += 1
        return result
