// O For/of nos permite iterar (repetir) uma ação, aqui nos retorna os 
// valores do Array.
let numeros = [1,2,3,4,5];

for(let numero of numeros) {
    console.log(numero);
}

// Poderia ser em uma String. 
let word = 'Hello';

for(let letter of word){
    console.log(letter);
}

// Podemos somar um valor a cada elemento do Array. 
let arrOfNumbers = [10, 20, 30];

for(let sum of arrOfNumbers){
    sum += 1;
    console.log(sum);
}
// O for/of não altera o array, somente imprime a soma solicitada.

// Exercício 1: Utilize o for/of para imprimir os elementos da
// lista names com o console.log().
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){
    console.log(name);
}


