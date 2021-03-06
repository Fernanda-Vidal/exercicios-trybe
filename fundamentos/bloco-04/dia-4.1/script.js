// Exercício 1:Faça cinco programas, um para cada operação aritmética básica.Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
const a = 18;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercício 2: Faça um programa que retorne o maior de dois números.Defina no começo do programa duas constantes com os valores que serão comparados.
const num1 = 100;
const num2 = 30;

if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}

// Exercício 3: Faça um programa que retorne o maior de três números.Defina no começo do programa três constantes com os valores que serão comparados.
const num1 = 2000;
const num2 = 30;
const num3 = 150000;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3)
}

// Exercício 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const periodo = "noite";

if (periodo == "manhã") {
    console.log("positive");
}
else if (periodo == "tarde") {
    console.log("negative");
}
else {
    console.log("zero");
}

// Exercício 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ladoA = 60;
const ladoB = 60;
const ladoC = -60;

if (ladoA + ladoB + ladoC === 180) {
    console.log(true);
}
else if (ladoA + ladoB + ladoC > 180) {
    console.log(false);
}
else {
    console.log("Valores de angulos inválidos")
};

// Exercício 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "QUEEN".toLowerCase();

switch (peca) {
    case "queen":
        console.log("Anda reto e em diagonal");
        break;

    case "king":
        console.log("Anda reto e em diagonal, somente uma casa por vez");
        break;

    case "rook":
        console.log("Anda reto");
        break;

    case "bishop":
        console.log("Anda em diagonal");
        break;

    case "knight":
        console.log("Anda em L");
        break;

    case "pawn":
        console.log("Anda somente para a frente, somente uma casa por vez. Excepcionalmente na primeira rodada, pode andar duas casas. Só pode comer na diagonal.")
        break;
}

// Exercício 7: Escreva um programa que converte uma nota dada em porcentagem(de 0 a 100) em conceitos de A a F.

let nota = 75;

if (nota >= 90 && nota <= 100) {
    console.log("A");
}
else if (nota >= 80 && nota < 90) {
    console.log("B");
}
else if (nota >= 70 && nota < 80) {
    console.log("C");
}
else if (nota >= 60 && nota < 70) {
    console.log("D");
}
else if (nota >= 50 && nota < 60) {
    console.log("E");
}
else if (nota < 50 && nota >= 0) {
    console.log("F");
}
else {
    console.log("Nota inválida");
}

// Exercício 8: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.Caso contrário, ele retorna false.

const num1 = 1;
const num2 = 3;
const num3 = 1;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.Caso contrário, ele retorna false.

const num1 = 1;
const num2 = 2;
const num3 = 2;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.A partir dos valores, calcule quanto de lucro(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 10;
const valorVenda = 20;

let imposto = custoProduto * 0.2;
let custoTotal = custoProduto + imposto;
let lucro = valorVenda - custoTotal;

if (custoProduto >= 0 && valorVenda >= 0) {
    console.log(lucro*1000);
}
else {
    console.log("Erro!");
}

// Exercícios 11: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 5000;
let inss;
let ir;
let salarioLiquido;


console.log(salarioBruto);
console.log(inss);
console.log(salarioLiquido);

if (salarioBruto <= 1556.94){
    inss = salarioBruto * 0.008;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.009;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
}
else {
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;

console.log(salarioBase);

if (salarioBase <= 1903.98){
    ir = 0;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido)
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir = salarioBase * 0.075 - 142.80;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir = salarioBase * 0,15 - 354,80;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = salarioBase * 0,225 - 636.13;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else {
    ir = salarioBase * 0,275 - 869,36;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}


