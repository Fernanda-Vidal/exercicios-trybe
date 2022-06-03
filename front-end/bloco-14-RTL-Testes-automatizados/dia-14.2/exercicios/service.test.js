let { randomNumber, upperCase, firstLetter, concatenateStrings } = require('./service');

describe('Testa a função service', () => {
    it('Verifica se a função existe', () => {
        randomNumber = jest.fn().mockReturnValue(10);
        expect(randomNumber()).toBe(10);
    })

    it('Verifica se a função foi chamada', () => {
        randomNumber()
        expect(randomNumber).toHaveBeenCalled()
    })

    it('Verifica quantas vezes a função foi chamada', () => {
        randomNumber()
        expect(randomNumber).toHaveBeenCalledTimes(3)
    })
})

describe('Verifica se a nova implementação funciona', () => {
    it('Verifica se a divisão é aplicada, se a nova função é chamada e se ela é chamada somente uma vez', () => {
        randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
        
        expect(randomNumber(10,5)).toBe(2)
        expect(randomNumber).toHaveBeenCalled()
        expect(randomNumber).toHaveBeenCalledTimes(1)
    })

    it('Verifica se a função é chamada com 10 e 5', () => {
        expect(randomNumber).toHaveBeenCalledWith(10, 5)
    })
})

describe('Verifica se a implementação com 3 parametros funciona', () => {
    it('Verifica se a multiplicação dos parâmetros ocorre', () => {
        randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)

        expect(randomNumber(2, 2, 2)).toBe(8)
        expect(randomNumber).toHaveBeenCalled()
        expect(randomNumber).toHaveBeenCalledTimes(1)
        expect(randomNumber).toHaveBeenCalledWith(2, 2, 2)
    })

    it('Verifica se a função é resetada e a função que retorna o dobro é implementada', () => {
        randomNumber.mockReset();
        expect(randomNumber).toHaveBeenCalledTimes(0)

        randomNumber = jest.fn().mockImplementation((a) => a * 2)
        expect(randomNumber(2)).toBe(4)
        expect(randomNumber).toHaveBeenCalledTimes(1)
    })
})

describe("Verifica funções implementadas para o exercício 4", () => {
    it('Verifica se a função upperCase teve sua implementação alterada para retornar o parâmetro em caixa baixa', () => {
        upperCase = jest.fn().mockImplementation((string) => string.toLowerCase())
        expect(upperCase('TESTE')).toBe('teste');
        expect(upperCase).toHaveBeenCalled();
        expect(upperCase).toHaveBeenCalledTimes(1)
        expect(upperCase).toHaveBeenCalledWith('TESTE')
    })

    it("Verifica se a função 'firstLetter' teve sua implementação alterada para retornar a ultima letra do parâmetro", () => {
        firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1])
      
        expect(firstLetter('teste')).toBe('e');
        expect(firstLetter).toHaveBeenCalled();
        expect(firstLetter).toHaveBeenCalledWith('teste')
    })

    it("Verifica se a função 'concatenaString' teve sua implementação alterada para receber três strings e concatená-las", () => {
        concatenateStrings = jest.fn().mockImplementation((first, second, third) => first + ' ' + second + ' ' + third);

        expect(concatenateStrings('Fernanda', 'Vidal', 'de Jesus')).toBe('Fernanda Vidal de Jesus');
        expect(concatenateStrings).toHaveBeenCalled();
        expect(concatenateStrings).toHaveBeenCalledWith('Fernanda', 'Vidal', 'de Jesus')
    })

})