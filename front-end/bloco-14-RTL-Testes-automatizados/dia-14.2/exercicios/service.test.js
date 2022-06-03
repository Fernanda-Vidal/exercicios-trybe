let { randomNumber } = require('./service');
const service = require('./service');

describe('Exercício 1', () => {
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

describe('Exercício 2', () => {
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

describe('Exercício 3', () => {
    it('Verifica se a multiplicação dos parâmetros ocorre', () => {
        randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)

        expect(randomNumber(2, 2, 2)).toBe(8)
        expect(randomNumber).toHaveBeenCalled()
        expect(randomNumber).toHaveBeenCalledTimes(1)
        expect(randomNumber).toHaveBeenCalledWith(2, 2, 2)
    })

    it('Verifica se a função é resetada e a função que retorna o dobro é implementada', () => {
        randomNumber.mockReset();
        expect(randomNumber).not.toHaveBeenCalled()


        randomNumber = jest.fn().mockImplementation((a) => a * 2)
        expect(randomNumber(2)).toBe(4)
        expect(randomNumber).toHaveBeenCalledTimes(1)
    })
})

describe("Exercício 4", () => {
    it("Verifica se a função 'upperCase' teve sua implementação alterada e depois restaurada", () => {
        service.upperCase = jest.spyOn(service, "upperCase").mockImplementation((string) => string.toLowerCase())

        expect(service.upperCase('TESTE')).toBe('teste');
        expect(service.upperCase).toHaveBeenCalled();
        expect(service.upperCase).toHaveBeenCalledTimes(1)
        expect(service.upperCase).toHaveBeenCalledWith('TESTE')
        
        service.upperCase.mockRestore();
        expect(service.upperCase('fernanda')).toBe('FERNANDA')

    })
    
    it("Verifica se a função 'firstLetter' teve sua implementação alterada e depois restaurada", () => {
        service.firstLetter = jest.spyOn(service, "firstLetter").mockImplementation((string)=> string[string.length -1])

        expect(service.firstLetter('Alícia')).toBe('a');
        expect(service.firstLetter).toHaveBeenCalled();
        expect(service.firstLetter).toHaveBeenCalledWith('Alícia');

        service.firstLetter.mockRestore();
        expect(service.firstLetter('Kauã')).toBe('K');
    })

    it("Verifica se a função 'concatena' teve sua implementação alterada e depois restaurada", () => {
        service.concatena = jest.spyOn(service, "concatena").mockImplementation((first, second, third) => first + ' ' + second + ' ' + third)
      
        expect(service.concatena('Fernanda', 'Vidal', 'de Jesus')).toBe('Fernanda Vidal de Jesus');
        expect(service.concatena).toHaveBeenCalled();
        expect(service.concatena).toHaveBeenCalledWith('Fernanda', 'Vidal', 'de Jesus')

        service.concatena.mockRestore();
        expect(service.concatena('Fernanda', 'Vidal')).toBe('Fernanda Vidal');
    })
     

})