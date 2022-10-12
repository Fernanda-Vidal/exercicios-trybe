"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `myNumber + myParam = ${this.myNumber + myParam}`;
    }
}
const teste = new MyClass(9);
console.log(teste.myNumber);
console.log(teste.myFunc(79));
