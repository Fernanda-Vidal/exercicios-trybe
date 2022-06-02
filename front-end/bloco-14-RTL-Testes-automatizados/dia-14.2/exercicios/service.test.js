let { randomNumber } = require('./service');

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