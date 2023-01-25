import sys

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

print("Maria", "João", "Miguel", "Ana")
print("Maria", "João", "Miguel", "Ana", sep=", ")

print("Em duas ")
print("linhas.")

print("Na mesma", end=" ")
print("linha.")