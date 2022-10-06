import readline from 'readline-sync';

const unitMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"]

function convertMass (value: number, from: string, to: string): number {
    const fromIndex = unitMass.indexOf(from);
    const toIndex = unitMass.indexOf(to);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

// console.log(convertMass(20, 'g', 'mg'))

function execMass() {
    const value = readline.questionFloat('Digite o valor a ser convertido? \n');
    const fromUnitChoiceIndex = readline.keyInSelect(unitMass, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline.keyInSelect(unitMass, 'Escolha um número para a conversão:');

    const fromUnitChoice = unitMass[fromUnitChoiceIndex];
    const toUnitChoice = unitMass[toUnitChoiceIndex];

    const result = convertMass(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

    console.log(message);
}

execMass();