async/await

describe('Descrição geral', () => {
    it('descrição', async() => {
      await requisicao();
    });
  });

  Quando eu informo o await expect() num teste assíncrono, eu estou dizendo para o código que eu espero que o meu retorno seja uma promisse.
  
  Nós precisamos sempre quebrar o teste para verificar se não está dando um falso positivo.

  No caso das promisses, o retorno dela pode ser RESOLVE ou REJECT, então nos testes assíncronos, é necessário utilizar o matcher próprio para essas verificações que possuem esses mesmos nomes: RESOLVE e REJECT, esses matchers são associados com outros já conhecidos, como o toBe(), por exemplo.No
