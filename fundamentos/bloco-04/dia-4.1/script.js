// Exercício 1:Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
// const a = 18;
// const b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Exercício 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const num1 = 100;
// const num2 = 30;

// if (num1 > num2) {
//     console.log(num1);
// }
// else {
//     console.log (num2);
// }

// Exercício 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const num1 = 2000;
// const num2 = 30;
// const num3 = 150000;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// } 
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3)
// }

// Exercício 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const periodo = "noite";

// if (periodo == "manhã"){
//     console.log("positive");
// } 
// else if (periodo == "tarde"){
//     console.log("negative");
// }
// else {
//     console.log("zero");
// }

// Exercício 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// 
// const ladoA = 60;
// const ladoB = 60;
// const ladoC = -60;

// if (ladoA + ladoB + ladoC === 180) {
//     console.log(true);
// }
// else if (ladoA + ladoB + ladoC > 180) {
//     console.log(false);
// }
// else {
//     console.log("Valores de angulos inválidos")
// };

// Exercício 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// let peca = "pawn";

// switch (peca) {
//     case "queen":
//         console.log("Anda reto e em diagonal");
//         break;

//     case "king":
//         console.log("Anda reto e em diagonal, somente uma casa por vez");
//         break;

//     case "rook":
//         console.log("Anda reto");
//         break;

//     case "bishop":
//         console.log("Anda em diagonal");
//         break;

//     case "knight":
//     console.log("Anda em L");
//         break;

//     case "pawn":
//         console.log("Anda somente para a frente, somente uma casa por vez. Excepcionalmente na primeira rodada, pode andar duas casas. Só pode comer na diagonal.")
//         break;
// }



********** Exercício 7:

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


    Exercício 8:

const num1 = 1;
const num2 = 3;
const num3 = 2;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

Exercício 9:

const num1 = 2;
const num2 = 2;
const num3 = 7;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true);
}
else {
    console.log(false);
}

