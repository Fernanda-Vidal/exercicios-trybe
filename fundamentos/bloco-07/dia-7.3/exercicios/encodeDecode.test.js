const {encode, decode} = require('./encodeDecode');

describe('Testes relacionados à função encode e decode', () => {
    test('Teste se encode é uma função', () => {
        expect(typeof encode && typeof decode).toBe('function');
    });
    test(`Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente`, () => {
        expect(encode('ana')).toBe('1n1');
        expect(encode('ele')).toBe('2l2');
        expect(encode('sim')).toBe('s3m');
        expect(encode('ovo')).toBe('4v4');
        expect(encode('um')).toBe('5m');
    });
    test(`Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;`, () => {
        expect(decode('1n1')).toBe('ana');
        expect(decode('2l2')).toBe('ele');
        expect(decode('s3m')).toBe('sim');
        expect(decode('4v4')).toBe('ovo');
        expect(decode('5m')).toBe('um');
    });
    test(`Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.`, () => {
        expect(encode('teste').length).toBe(5);
    });    
})

