file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# Só é possível escrever em um arquivo após abri-lo em um modo que permita escrita.

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

# print("Túlio 22", file=file)

# writelines espera que cada linha tenha seu próprio caractere de separação (\n)
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close() # importante lembrar de fechar o arquivo.
