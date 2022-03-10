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

// 4) Com o mesmo código do exercício anterior, caso o valor final seja maior
// que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a
//  mensagem: "valor menor ou igual a 20":


if (mediaAritmetica > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}

// 5) Utilizando for , descubra qual o maior valor contido no array e imprima-o:
let maiorNumero = numbers[0];
for(let indice = 0; indice < numbers.length; indice += 1){
    if (maiorNumero < numbers[indice]){
        maiorNumero = numbers[indice];
}
}
   console.log(maiorNumero);
    
// 6)Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não
// exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado":
let impares = [];
for(let indice = 0; indice < numbers.length; indice += 1){
    if(numbers[indice] % 2 != 0){
        impares.push(numbers[indice]);
    }
}
console.log(impares);


