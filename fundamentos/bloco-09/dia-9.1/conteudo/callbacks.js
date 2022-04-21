// Callbacks
// callback é uma função passada como parâmetro para outra função.

// Um exemplo é a função setTimeout recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function , e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função.

setTimeout(1parametro, 2parametro);

// O primeiro parâmetro é uma callback sem nome: () => {} . O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).

setTimeout(() => {}, 2000);

// -------------------------------------------------------------------------------------

const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const renda = 1000;

  const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

//   Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos despesas e retornará este valor para a constante despesaTotal .

const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
    
  despesaMensal(renda, despesas, somaDespesas);

//   Em síntese o que fizemos foi:
// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback .
// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.
// -----------------------------------------------------------------------------------------------

// Declaramos nossa variável de despesas
const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  // Declaramos nossa renda
  const renda = 1000;
  
  const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(renda, despesas, somaDespesas);
  
  // Balanço do mês:
  //     Recebido: R$1000,00
  //     Gasto: R$459,00
  //     Saldo: R$541,00

  // =========================================================================================
  
  // Definição da função userFullName
  const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
  
  // Definição da função getUser
  const getUser = (param) => {
    const userToReturn = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    // Retornamos nosso parâmetro, que será uma função (callback)
    return param(userToReturn);
  };

  // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
  console.log(getUser(userFullName));
 
   // =========================================================================================
  // Para fixar

//   1 - Adicione uma callback como parâmetro da funcão getUser .

// No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
// Insira o retorno da função getUser ;
// Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
// Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
return callback(userToReturn);
};

console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// -------------------------------------------------------------------------------------------

// 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser .

// No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
// Insira uma callback como parâmetro da função getUser ;
// Retorne a callback passada como parâmetro na função getUser ;

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo









