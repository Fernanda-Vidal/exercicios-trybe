import profile


def test_can_use_instance_in_loop():
    test_friends = ["Eli", "Ka", "Felps", "Tha", "Isaac"]
    connections = profile.ProfileConnections(test_friends)

    for user in connections:
        assert user["name"] in test_friends
