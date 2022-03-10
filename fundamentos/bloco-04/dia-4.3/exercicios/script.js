// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultado = 1;

for(let i = fatorial; i > 0; i -= 1){
    resultado *= i;
}

console.log(resultado);