// NodeJs Assert

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70

// ESCREVENDO TESTES:

// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// sum.js
const sum = (a, b) => a + b;

module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

// A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos.
// No segundo arquivo, utilizamos require('./sum') para importar a função sum.

// Expect e matchers

// toBe - testa a igualdade estrita
expect(5).toBe("5")

// toEqual - testar igualdade de objetos e arrays. 


// --------------------------------------------NÃO ENTENDI!!!!
test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });


//   Exceções
//   toThrow - testar se uma função é capaz de lançar um erro quando executada

const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
      test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
        expect(multiplyByTwo(4)).toBe(8);
      });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

//   Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido") .


// not -  testar o oposto de algo. 
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});