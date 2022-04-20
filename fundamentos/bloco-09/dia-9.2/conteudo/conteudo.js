// Application Programming Interface (API)

// Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// Como utilizar APIs na minha aplicação?

// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.

// Encontre uma API pública, que seja bem documentada e mantida;

// Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;

// Entenda o formato dos dados disponíveis;

// Faça requests e receba responses da API com os dados que você deseja receber.

// Fazendo uma requisição a uma API

// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal. // No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response .

wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q

// ==========================================================================
// Relembrando o fluxo assíncrono

// a ordem de execução de funções no javascript : as funções são lidas de cima para baixo e suas execuções são colocadas em uma fila. Assim, a primeira função lida é a primeira a ser executada.

// A função assíncrona é diferente! Quando o javascript lê uma função desse tipo, ela é enviada para uma área especial, e a fila síncrona continua correndo. Quando a função assíncrona termina sua execução, ela volta para a fila novamente para "entregar a resposta" de sua execução.

// Vale lembrar que a área especial das assíncronas não é muito ordenada, ou seja, a primeira função assíncrona que entra não é, necessariamente, a primeira a sair, já que depende do tempo de execução de cada uma.

// ============================================================================================
// Promises

// As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:

// 1 As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções;

// 2 As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono;

// 3 As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um Construtor .

// Outro ponto importante é que as Promises possuem 3 estados:

// * Pending (pendente): estado inicial, significa que ela está em execução;
// * Fulfilled (resolvida): estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso;
// * Rejected (rejeitada): estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição.

// Então quando você se deparar com um Promise { <[estado]> } em um console.log() pode significar que você tentou acessar o valor de uma Promise antes dela ter finalizado sua execução.

// ============================================================================================
// Fetch API

// A função fetch pode receber dois parâmetros:
// 1 - URL do serviço alvo da requisição;
// 2 - E, opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API.

// ============================================================================================

