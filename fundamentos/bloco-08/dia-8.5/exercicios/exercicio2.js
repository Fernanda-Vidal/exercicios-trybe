// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
array = [1, 2, 3, 4, 5, 6, 7, 8, 8]

function sum(...parametros) {
    return parametros.reduce((acc, param) => acc + param, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));