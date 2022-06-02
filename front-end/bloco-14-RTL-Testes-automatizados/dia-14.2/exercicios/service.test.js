let { randomNumber } = require('./service');

describe('Testa a função service', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    it('Verifica se a função existe', () => {
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