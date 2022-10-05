"use strict";
exports.__esModule = true;
function printCoord(pt) {
    console.log('O valor da coordenada x é:' + pt.x);
    console.log('O valor da coordenada y é:' + pt.y);
}
printCoord({ x: 200, y: 100 });
// Conteudo
function imprimirCPF(cpf) {
    console.log('Seu CPF é:' + cpf);
}
imprimirCPF(11111111111);
imprimirCPF('111.111.111-11');
