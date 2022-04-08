// FIRST-CLASS FUNCTIONS
// Podemos atribuir funções à variáveis, exatamente como nas arrow functions, mas tbm fazendo o contrário.

// arrow functions
const sum = (number1, number2) => {
    return number1 + number2;
  };

//   atribui a função sum à variável sumVariable
  function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]

// ---------------------------------------------------------
//   Passar funções como argumento para outras funções:
  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

// ------------------------------------------------------------
//   Retornar uma função de outra função:
const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

//   ----------------------------------------------------------

// HIGHER ORDER FUNCTIONS - HOFS 
// addEventListener é uma HOF 
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// -------------------------------------------------------------
// Estruturando uma HOF
// console.log é uma função própria do JavaScript
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

//   -----------------------------------------------------------
// number é um parâmetro, mas também é uma função.
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

//   O parametro number (5) roda no for da função repeat, e quando chega no parametro action(que também é uma função que recebe o paramtro count), começa a rodar a função number, que vai verificar se o count é par, caso seja, vai imprimí-lo , junto com o segundo parametro função console.log.


// -------------------------------------------------------------------
// repeat é uma HOF que recebe isEven e ou isOdd como callback.


const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

//   ----------------------------------------------------------------------

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10,5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));

// --------------------------------------------------------------------------

// PRA FIXAR

const wakeUp = () => `Acordando!!`;
const breakfast = () => `Bora tomar café!!`;
const sleep = () => `Partiu dormir!!`;

const doingThings = (act) => console.log(act);

doingThings(sleep())