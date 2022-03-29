// 1- Agora vamos trabalhar com algumas formas geométricas!
// Faça um programa que, dado um valor n qualquer, seja n > 1 ,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// Por exemplo:


let n = 5;
let linha = '';


for(let i = 0; i < n ; i += 1){
    linha = linha + '*';
};
for(let i = 0; i < n; i += 1){
        console.log(linha);
    }

    // 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima
    //  um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let linha = '';


for(let i = 0; i < n ; i += 1){
    linha = linha + '*';
    console.log(linha);
};

// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let linha = '';
let base = n;


for(let li = 0; li <= n ; li += 1){
    for(let col = 0; col <= n; col += 1) {
        if(col < base){
            linha = linha + ' ';
        }
        else {
            linha = linha + '*'
        }
}
console.log(linha);
linha = '';
base -= 1;
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// 5- Faça uma pirâmide com n asteriscos de base que seja 
// vazia no meio. Assuma que o valor de n será sempre ímpar:

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.