//EXERCÍCIO 1 - O programa recebe uma string representando numeral romano e retorna o número que ela representa.

// Eu tenho que pegar a string e verificar se ela existe no objeto boardNumbers, se existir, retorna ela.
// Eu tenho que verificar quantos caracteres ela tem e verificar:
//  - se o maior estiver à direita, os dois números devem ser subtraídos;
//  - se o maior estiver à esquerda, os dois números devem ser somados;

const boardNumbers = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000,
}

const convertNumbers = (stringRomano) => {
    stringRomano = stringRomano.toUpperCase();

    const array = stringRomano.split("")
    let result = 0;

    if (stringRomano.length === 1) {
        return boardNumbers[stringRomano]
    } else if (stringRomano.length === 2) {
        for (let i = 0; i < array.length; i += 1) {
            if (boardNumbers[array[i]] < boardNumbers[array[i + 1]]) {
                result = boardNumbers[array[i + 1]] - boardNumbers[array[i]]
                // return result;
            } else {
                result = boardNumbers[array[i]] + boardNumbers[array[i + 1]]
                return result;
            }
        }
    } else {
        for (i in array) {
            result += boardNumbers[array[i]]
        }
        return result;
    }
}

// console.log(convertNumbers('MMXVIII'));


// EXERCÍCIO 2 -
const list = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
    let pares = [];
    for (let i = 0; i < vector.length; i += 1) {
        // console.log(vector[i])
        for(let i2 = 0; i2 < vector[i].length; i2 += 1) {
            if(vector[i][i2] % 2 === 0) {
                pares.push(vector[i][i2])
            }
        }
    }

    return pares;
}

// console.log(arrayOfNumbers(list));

// EXERCÍCIO 3 - 
// Criar um objeto Fruits, fazer um for no array basket que:
    // - caso a chave não exista, a cria;
    // - caso exista, incremente a quantidade.
// Retorno no formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  const basketFruits = () => {
    const newBasket = {}
    basket.forEach((fruit) => !newBasket[fruit] ? newBasket[fruit] = 1 : newBasket[fruit] += 1)
      const result = Object.entries(newBasket).map((fruit) => ` ${fruit[1]} ${fruit[0]}s`)

      return `Sua cesta possui:${result}.`
    }
  console.log(basketFruits())