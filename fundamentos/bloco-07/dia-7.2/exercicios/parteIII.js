// Parte III
// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
console.log('*Exercício 1******************************')
const addTurn = (objModify, key, value) => {
    objModify[key] = value;
    return objModify
};

console.log(addTurn(lesson2, 'turno', 'noite'));


// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('*Exercício 2******************************')
const keysObject = (objeto) => Object.keys(objeto);

console.log(keysObject(lesson1));
console.log(keysObject(lesson2));
console.log(keysObject(lesson3));


// 3 Crie uma função para mostrar o tamanho de um objeto.
console.log('*Exercício 3******************************')
const sizeObject = (objeto) => Object.keys(objeto).length;

console.log(sizeObject(lesson1));

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('*Exercício 4******************************')
const valueObject = (objeto) => Object.values(objeto);

console.log(valueObject(lesson2));

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
console.log('*Exercício 5******************************')
const allLessons = {lesson1, lesson2, lesson3};
 
console.log(allLessons)

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
console.log('*Exercício 6******************************');

const totalStudents = (objeto) => {
    const keys = Object.keys(objeto);

    let total = 0;

    for (let i = 0; i < keys.length; i += 1){
        let currentKey = (keys[i]);
        total += objeto[currentKey].numeroEstudantes;
    }
    return `Serão ${total} estudantes no total`;
}

console.log(totalStudents(allLessons));
  
// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log('*Exercício 7******************************');
const valueKey = (objeto, posicao) => Object.values(objeto)[posicao];
console.log(valueKey(lesson3, 2));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log('*Exercício 8******************************');
const existPair = (objeto, nameKey, valueKey) => objeto[nameKey] === valueKey ? true : false;
console.log(existPair(lesson1, 'professor', 'Maria Clara'));

// SOLUÇÃO DO GABARITO.
// const verifyPair = (obj, key, value) => {
//     const arr = Object.entries(obj);
//     let isEqual = false;
//     for (let index in arr) {
//         if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//     }
//     return isEqual;
// };

// console.log(verifyPair(lesson1,'professor','Maria Clara'));





