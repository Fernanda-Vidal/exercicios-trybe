"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá Mundo!');
    }
}
class Subclass extends Superclass {
}
const myFunc = (object) => {
    object.sayHello();
};
const superC = new Superclass();
const sub = new Subclass();
myFunc(superC);
myFunc(sub);
