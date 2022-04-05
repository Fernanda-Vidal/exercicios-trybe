// Template literals:
// Usa-se ' ` ' (crases) no lugar das aspas.
// e variáveis entre ${...}, sendo possível adicionar expressões ${a+b}.
const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// É possível pular de linha somente com ';'.
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Arrow functions:
// Quando não há nada no corpo da função além do que será retornado, a sintaxe 
// da arrow function nos permite simplificar ainda mais a função printName 
// omitindo o return e as chaves:
const printName = () => 'Lucas';
console.log(printName());

// Quando a função recebe apenas um argumento (parâmetro), podemos omitir os parênteses:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// Função que conta as palavras de uma frase:
const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Fala galerinha do You Tube, beleza?'));

// Função que cria um objeto:
const objetoPessoa = (name, age) => ({nome: name, idade: age});
console.log(objetoPessoa('Fernanda', 34));

// Ternary Operator:
// erramenta que permite fazer operações condicionais mais simples
// onde só existam duas possibilidades de resposta.

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira


// Situação em que é mais simples usar o operador ternário:

// const checkIfElse = (age) => {
//     if (age >= 18) {
//       return `Você tem idade para dirigir!`;
//     } else {
//       return `Você ainda não tem idade para dirigir...`;
//     }
//   };
  
  const checkTernary = (age) => age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
console.log(checkTernary(25));
  
