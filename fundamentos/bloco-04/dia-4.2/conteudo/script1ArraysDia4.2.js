let lista = ['tomar café', "reunião", "brincar com o cachorro"];

// Para saber o tamanho do Array. 
console.log(lista.length); 

// Para encontrar o valor de um índice do Array. 
let procurarNaLista = lista[1];
console.log(procurarNaLista);

// Retorna a ultima posição do Array. 
procurarNaLista = lista[lista.length - 1];
console.log(procurarNaLista);

// Para adicionar um valor no fim do Array. 
lista.push("fazer exercícios Trybe");
console.log(lista);

//Para adicionar um valor no início do Array.
lista.unshift("fazer Anki");
console.log(lista);

// Para remover a ultima tarefa. 
lista.pop();
console.log(lista);

// Para procurar um índice dentro do Array.
let indiceLista = lista.indexOf("reunião");
console.log(indiceLista);

// Exercício 1: Obtenha o valor "Serviços" do array menu.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");
console.log(menuServices);

// Exercício 2: Procure o índice do valor "Portfólio" do array menu.

let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);

// Exercício 3: Adicione o valor "Contato" no final do array menu.
menu.push("Contato");
console.log(menu);