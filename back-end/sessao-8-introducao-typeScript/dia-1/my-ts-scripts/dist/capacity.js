"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, from, to) {
    const fromIndex = unitsCapacity.indexOf(from);
    const toIndex = unitsCapacity.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsCapacity, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsCapacity, 'Escolha um número para conversão:');
    const fromUnitChoice = unitsCapacity[fromUnitChoiceIndex];
    const toUnitChoice = unitsCapacity[toUnitChoiceIndex];
    const result = convertCapacity(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}.`;
    console.log(message);
}
exec();
