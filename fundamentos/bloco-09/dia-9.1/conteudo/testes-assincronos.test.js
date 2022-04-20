// Testes Assíncronos com Callbacks

// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

  // ==========================================================================
  // test('Não deveria passar!', (done) => {
  //   setTimeout(() => {
  //     expect(10).toBe(5);
  //     console.log('Deveria falhar!');
  //     done();
  //   }, 500);
  // });

  // ==========================================================================
  // Esta teste não dá falso positivo pois o erro foi embraçado com o try/catch e 
  // foi inserido o done (callback própria da biblioteca, que precisa ser chamada após os testes assíncronos) tanto no try quanto no catch para que ambos esperem o retorno da função assincrona antes de passar o teste. Para que não haja o risco de o teste passar antes de a função ter sido executada, dada a assincronissidade.

  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
 } catch(error) {
   done(error);
 }
}, 500);
});

// ================================================================================
// É muito importante verificar se os resultados exibidos não são falso-positivos.
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});










