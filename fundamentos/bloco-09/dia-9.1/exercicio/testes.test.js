// Exercício 7
const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
  // console.log(uppercase('fernanda', ))
  
  describe('Agrupa o primeiro bloco de testes', () => {
    test('Verifica se a função uppercase transforma as letras em maiusculas', (done) => {
      uppercase('fernanda', (result)) => {
        try {
          expect(result).toBe('FERNANDA');
          done();
        } catch (error) {
          done (error);
        }
      }
    });
  });



// Exercício 9
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    
        // porque usar result, se na função é usado message? isso faz diferença??
      function callback(error, result) {
          expect(error).toBe('Não temos esse pokémon para você :(')
          done();
      }
      getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
    });
  
    it("retorna um pokemon que existe no banco de dados", (done) => {
        // porque usar err se no teste de cima foi usado error?
        function callback(err, result) {
            expect(result).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
            done();
          }
      
          getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
  });