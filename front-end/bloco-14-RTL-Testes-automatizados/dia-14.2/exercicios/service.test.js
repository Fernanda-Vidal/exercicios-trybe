let { randomNumber } = require('./service');

describe('Testa a função service', () => {
    it('Verifica se a função existe, foi chamada e quantas', () => {
        randomNumber = jest.fn().mockReturnValue(10);
        expect(randomNumber()).toBe(10);
    })

    it('Verifica se a função foi chamada', () => {
        randomNumber()
        expect(randomNumber).toHaveBeenCalled()
    })

    it('Verifica se a função foi chamada', () => {
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

