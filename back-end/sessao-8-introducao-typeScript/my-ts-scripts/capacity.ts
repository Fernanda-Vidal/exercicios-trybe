import readline from 'readline-sync';

const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"]

function convertCapacity (value: number, from: string, to: string): number {
    const fromIndex = unitsCapacity.indexOf(from);
    const toIndex = unitsCapacity.indexOf(to);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    const fromUnitChoiceIndex = readline.keyInSelect(unitsCapacity, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline.keyInSelect(unitsCapacity, 'Escolha um número para conversão:');

    const fromUnitChoice = unitsCapacity[fromUnitChoiceIndex];
    const toUnitChoice = unitsCapacity[toUnitChoiceIndex];

    const result = convertCapacity(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}.`
    console.log(message);
}

exec()