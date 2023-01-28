import json # json é um modulo que vem embutido, porém precisamos importá-lo

with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]  # O loads carrega o JSON a partir de um texto
    # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])
