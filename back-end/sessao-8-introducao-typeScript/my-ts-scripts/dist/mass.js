"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, from, to) {
    const fromIndex = unitMass.indexOf(from);
    const toIndex = unitMass.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
// console.log(convertMass(20, 'g', 'mg'))
function execMass() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido? \n');
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitMass, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitMass, 'Escolha um número para a conversão:');
    const fromUnitChoice = unitMass[fromUnitChoiceIndex];
    const toUnitChoice = unitMass[toUnitChoiceIndex];
    const result = convertMass(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
execMass();
