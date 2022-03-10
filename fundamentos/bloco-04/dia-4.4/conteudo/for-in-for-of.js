// O FOR/IN anda, prioritariamente, pelo indice/chave(propriedade).
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index);
  }

//Pode trazer o valor se usarmos [] pra delimitar a chave/indíce.

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Para imprimir o índice/chave antes de cada valor:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

// O FOR/OF só anda pelos valores, não consigo acessar os índices/chaves.
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
    console.log(value);
  };
//resultado: hamburguer, bife, acarajé;

// // Para fixar. 
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a 
// mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome 
// em questão.
