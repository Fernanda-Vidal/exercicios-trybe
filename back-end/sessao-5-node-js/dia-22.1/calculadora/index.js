const operacoes = require('./operacoes');
const readline = require('readline-sync');

console.log('calculadora simples');
const num1 = readline.questionInt('Digite um número');
const op = readline.question('Digite a operação: (+, -, *, /)');
const num2 = readline.questionInt('Digite um número');

switch (op) {
    case '+':
        operacoes.sum(num1, num2)
        break;
    case '-':
        operacoes.sub(num1, num2)
        break;
    case '*':
        operacoes.mul(num1, num2)
        break;
    case '/':
        operacoes.div(num1, num2)
        break;
    default:
        console.log('Essa operação não existe')
}