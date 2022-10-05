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
//  Conteúdo CLASSES
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
// Exercício pra fixar
var Dog = /** @class */ (function () {
    function Dog(name, color, age, breed) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.breed = breed;
    }
    return Dog;
}());
var House = /** @class */ (function () {
    function House(kitchen, bathroom, leavingRoom, diningRoom, bedroom, laundry) {
        this.kitchen = kitchen;
        this.bathroom = bathroom;
        this.leavingRoom = leavingRoom;
        this.diningRoom = diningRoom;
        this.bedroom = bedroom;
        this.laundry = laundry;
    }
    return House;
}());
var employee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () { return this.firstName + ' ' + this.lastName; },
    subject: 'Matemática',
    sayHello: function () {
        return "Ol\u00E1, eu sou ".concat(this.fullName(), " e leciono ").concat(this.subject, ".");
    }
};
console.log(teacher);
