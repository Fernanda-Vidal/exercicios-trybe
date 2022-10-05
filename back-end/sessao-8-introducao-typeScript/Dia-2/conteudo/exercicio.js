"use strict";
exports.__esModule = true;
function printCoord(pt) {
    console.log('O valor da coordenada x é:' + pt.x);
    console.log('O valor da coordenada y é:' + pt.y);
}
printCoord({ x: 200, y: 100 });
// Conteudo Type Union
function imprimirCPF(cpf) {
    console.log('Seu CPF é:' + cpf);
}
imprimirCPF(11111111111);
imprimirCPF('111.111.111-11');
//  Conteúdo Classes
var Person = /** @class */ (function () {
    function Person(name, birthDate, age) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
var person1 = new Person('Jane Doe', new Date('1986-01-01'), 27);
var person2 = new Person('Jon Doe', new Date('1980-08-05'), 42);
var person3 = new Person('Jhony Doe', new Date('1987-03-09'));
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
console.log(person3);
person3.eat();
