// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i > 0; i -= 1) {
    resultado *= i;
}

console.log(resultado);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo,
// a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como
// exemplo, depois troque por outras para verificar se seu algoritmo está funcionando
// corretamente.

let word = 'fernanda';
let newWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i];
}
console.log(newWord);

//  3- Considere o array de strings abaixo. Escreva dois algoritmos: um que retorne
//  a maior palavra deste array e outro que retorne a menor. Considere o número de 
//  caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (i = 0; i < array.length; i += 1) {
    let verifica = array[i];

    if (maior.length < verifica.length) {
        maior = verifica;
    }
    else if (menor.length > verifica.length)
        menor = verifica;
}
console.log(maior);
console.log(menor);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva
// um algoritmo que retorne o maior número primo entre 0 e 50.
let n = 50;
let numerosPrimos = [2, 3,];

for(let numeroAtual = 4; numeroAtual <= n; numeroAtual += 1){
    let quantidadeDivisores = 0;

    for(let nMenor = 2; nMenor < numeroAtual; nMenor += 1){
        if(numeroAtual % nMenor === 0){
            quantidadeDivisores += 1;
        }
    }
    if(quantidadeDivisores === 0){
        numerosPrimos.push(numeroAtual);
    }
}

console.log(numerosPrimos);

let maior = 2;
for(let i = 0; i < numerosPrimos.length; i += 1){
    if(maior < numerosPrimos[i]){
        maior = numerosPrimos[i];
    }   
}
console.log(maior);