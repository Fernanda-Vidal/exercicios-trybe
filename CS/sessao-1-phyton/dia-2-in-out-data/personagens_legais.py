characters_file = open("meus-personagens-favoritos.txt", mode='w')

characters_file.write('Harry Potter\n')
characters_file.write('Gandalf\n')
characters_file.write('Nimue\n')

print('Gandalf\n', file=characters_file)

more_characters = ['Sherlock Holmes\n', 'Frodo\n']

characters_file.writelines(more_characters)

characters_file.close()