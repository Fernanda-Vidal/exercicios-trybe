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
    sayHello2() {
        this.sayHello();
    }
}
const myFunc = (object) => {
    object.sayHello2();
};
// const superC = new Superclass();
const sub = new Subclass();
// myFunc(superC);
myFunc(sub);
