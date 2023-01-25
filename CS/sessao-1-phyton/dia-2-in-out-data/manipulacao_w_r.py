# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close() # não podemos esquecer de fechar o arquivo

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo