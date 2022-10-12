class Superclass {
    public isSuper: boolean;
    constructor() {
        this.isSuper = true;
    }

    public sayHello(): void {
        console.log('Olá Mundo!');
    }
}

class Subclass extends Superclass {}

const myFunc = (object: Superclass) => {
    object.sayHello();
}

const superC = new Superclass();
const sub = new Subclass();

myFunc(superC);
myFunc(sub);