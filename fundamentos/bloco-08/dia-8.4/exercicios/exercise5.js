
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// Adicione o código do exercício aqui:
// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
    const eachName = names.reduce((acc, name) => {
      return acc + name.split('').reduce((acc1, letter) => {
            if (letter === 'a' || letter === 'A') {
                return acc1 += 1;
            }
            return acc1;
        }, 0)
    }, 0)
    return eachName;
  }

console.log(containsA())