// 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log():

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(index = 0; index < numbers.length; index += 1){
//     console.log (numbers[index]);
// }

// // ou

// for (let number of numbers){
//     console.log(number);
// }

// 2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado:
let soma = 0;
for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}

console.log(soma);

// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);







