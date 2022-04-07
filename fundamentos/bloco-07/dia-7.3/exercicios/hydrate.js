// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

function hydrate (stringNumeroBebida) {
    const qtBebidas = stringNumeroBebida.match(/\d+/g).map(Number);
    let result = 0;

    for(let i in qtBebidas){
        result += qtBebidas[i];
    }

    
    if (result > 1) {
        return `${result} copos de água`;
    } 
    return `${result} copo de água`;

};

console.log(hydrate('2 cerveja, 8 tekilas'));

module.exports = hydrate;
