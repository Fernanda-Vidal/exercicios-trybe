// Exercício 1:
// const a = 18;
// const b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Exercício 2:
// const num1 = 200;
// const num2 = 30;

// if (num1 > num2) {
//     console.log(num1);
// }
// else {
//     console.log (num2);
// }

// Exercicío 3:
// const num1 = 20;
// const num2 = 30;
// const num3 = 150;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// } 
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3)
// }

// Exercício 4:

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

// Exercício 5:

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

// ***********Exercício 6:

// let peca = {
//     queen = "Anda reto e em diagonal";
//     king = "Anda reto e em diagonal, somente uma casa por vez";
//     rook = "Anda reto";
//     bishop = "Anda em diagonal";
//     knight = "Anda em L";
//     pawn = "Anda somente para a frente, somente uma casa por vez. Excepcionalmente na primeira rodada, pode andar duas casas. Só pode comer na diagonal.";
// }


// let upperCaseQueen = queen.toLocaleUpperCase();
// let upperCaseKing = king.toUpperCase();
// let upperCaseRook = rook.toUpperCase();
// let upperCaseBishop = bishop.toUpperCase();
// let upperCaseKnight = knight.toUpperCase();
// let upperCasePawn = pawn.toUpperCase();

// console.log(upperCaseQueen);
// console.log(upperCaseKing);

// switch(peca){
//     case "queen":
//         console.log
// }

// **********Exercício 6 NÃO RESOLVIDO.

// **********Exercício 7:

// let nota = 75;

// if (nota >= 90 || nota =< 100) {
//     console.log(A);
// }
// else if (nota >= 80 || nota < 90) {
//     console.log(B);
// }
// else if (nota >= 70 || nota < 80) {
//     console.log(C);
// }
// else if (nota >= 60 || nota < 70) {
//     console.log(D);
// }
// else if (nota >= 50 || nota < 60) {
//     console.log(E);
// }
// else if (nota < 50) {
//     console.log(F);
// }
// else {
//     console.log("Nota inválida.");
// }

// **********Exercício 7 NÃO RESOLVIDO.

// Exercício 8:

const num1 = 1;
const num2 = 3;
const num3 = 2;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log(true);
}
else {
    console.log(false);
}