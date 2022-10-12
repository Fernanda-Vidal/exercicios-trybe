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
    constructor() {
        super();
        super.isSuper = false;
    }
    sayHello2() {
        this.sayHello();
    }
}
const myFunc = (object /*Subclass*/) => {
    // object.sayHello2();
    if (object.isSuper === true)
        console.log('Super!');
    else
        console.log('Sub!');
};
const superC = new Superclass();
const sub = new Subclass();
myFunc(superC);
myFunc(sub);
