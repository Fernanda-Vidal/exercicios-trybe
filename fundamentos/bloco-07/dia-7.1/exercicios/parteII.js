// Crie uma função que receba um número e retorne seu fatorial.

// let fatorial = number => {
//     let mutiplica = 1; 
//     for (let i = 1; i <= number; i += 1){
//         mutiplica = mutiplica * i;
//     }
    
//     return mutiplica;
// }

// console.log(fatorial(4));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// tentativa=>
// function fatoraNumero(numero) {
//     let valor = 0;
    
//     if (numero > 0) {
//         valor = numero * numero;
//         numero = numero - 1;
//         fatoraNumero(numero);
//     } 
//     return valor;
// }
// console.log(fatoraNumero(4));

// outra tentativa =>
// let fatora = n => {let valor = n * n; n = n - 1;
//     (n > 0) ? fatora(n): return valor;
// }

// console.log(fatora(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// ------------------------------------------------------------------------------------------

// function longestWord(frase) {
//     let splitify = frase.split(/[\s,]+/);
//     let longest = splitify[0];
    
//     for (let i = 0; i < splitify.length; i += 1){
//         if(splitify[i].length > longest.length){
//             longest = splitify[i];
//         }
//     }
//     return longest;
// }
// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'


// let longestWord = frase => {
//     let splitify = frase.split(/[\s,]+/);
//     let longest = splitify[0];
    
//     for (let palavra in splitify){
//         (splitify[palavra].length > longest.length) ? longest = splitify[palavra] : break;
//     }
//     return longest;
// }


// ------------------------------------------------------------------------------------------------------------
// 

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

const hardSkills = [`Git`, `HTML`, `CSS`, `JavaScript`, `Flexbox`];

const searchX = x => `Tryber ${x} aqui!`;
    

// console.log(searchX(`Fernanda`));

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

function concatena(retornoFunction){
console.log(`${retornoFunction}! Minhas cinco principais habilidades são:`);
let skill = hardSkills.sort();
let lastSkill = skill[skill.length -1];
    for (let i = 0; i < skill.length-1; i += 1){
     console.log(`* ${skill[i]};`);
    }
console.log(`* ${lastSkill}; ... #goTrybe`);
};

concatena(searchX('Fernanda'));

