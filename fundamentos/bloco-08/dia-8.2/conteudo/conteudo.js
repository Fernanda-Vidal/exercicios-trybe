// Importância das HOFs

//   Usando forEach no lugar do FOR:
  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

//   --------------------------------------------------------------
// Para encontrar o primeiro número divisível por 5 em um array, usando for e if:
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

// Usando Array.find():
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50

// ---------------------------------------------------------------------
// Estrutura das HOFs em Arrays
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
  });

//   Suas partes:

arrayOfValues - Nome do array que será percorrido;

.forEach - A HOF , pode ser, .find , .some , .every ;

element - Valor do elemento do array;

(element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .

// É isso mesmo! Quando você passa uma arrow function para uma HOF , o primeiro parâmetro que essa arrow function recebe é o elemento do array. 


// Podemos passar mais de um parâmetro para a função também. As HOFs disponibilizam para você, caso precisar, acesso a mais informações do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

// Array.forEach
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Ou

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails


const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach((showEmailList));

//   2 - Leia e entenda este exemplo do forEach feito no CodePen.

// ------------------------------------------------------------------------------------------------
// Array.find
// Recebe obrigatoriamente o argumento elemento, mas pode receber mais 2 opcionais.
// arr.find((elemento, indice, array) => {})

// Primeiro observe a função verifyEven . Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
// Quando a passamos como callback , o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((elemento) => elemento % 3 === 0 && elemento % 5 === 0);
}


console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((elemento) => elemento.length === 5);
}

console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((elemento) => elemento.id === id);
}

console.log(findMusic('31031685'));

// OU
function findMusic(music) {
  return music.id === '31031685';
}

console.log(musicas.find(findMusic));

// OU 
const findMusic = musicas.find((music) => music.id === '31031685');
console.log(findMusic);

// ----------------------------------------------------------------------------------------
// Array.some e Array.every

// Recebem obrigatoriamente o argumento elemento, mas podem receber mais 2 opcionais.
// arr.some((elemento, indice, array) => {});
// arr.every((elemento, indice, array) => {});

// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Para fixar
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(names, 'Alícia'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((elemento) => elemento.age >= minimumAge);

console.log(verifyAges(people, 18));
// -------------------------------------------------------------------------------------------------
// Array.sort

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// Se usarmos o sort com números sem a função de comparação:
const numeros = [3, 5, 7, 12, 123, 55, 90, 0, 13, 1];
console.log(numeros.sort()); //[  0, 1, 12, 123, 13,  3, 5, 55,   7, 90  ];

// Método sorte com Função de Comparação:
// console.log(numeros.sort((elementoB, elementoA) => {
//   if (elementoB < elementoA) {
//     return -1;
//   } else if (elementoB > elementoA) {
//     return 1;
//   }
//   return 0;
// }))

// Simplificando:
console.log(numeros.sort((elementoB,elementoA) => elementoB - elementoA)); // [  0,  1,  3,  5,   7, 12, 13, 55, 90, 123  ];

// Para ordenar de forma decrescente:
console.log(numeros.sort((elementoB,elementoA) => elementoA - elementoB)); // [  123, 90, 55, 13, 12, 7,  5,  3,  1,  0  ];


// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

people.sort((a, b) => b.age - a.age);

console.log(people);
