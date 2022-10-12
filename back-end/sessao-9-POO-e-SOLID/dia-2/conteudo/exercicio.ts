class Superclass {
    public isSuper: boolean;
    constructor() {
        this.isSuper = true;
    }

    protected sayHello(): void {
        console.log('Olá Mundo!');
    }
}

class Subclass extends Superclass {
    public sayHello2(): void {
        this.sayHello();
    }
}

const myFunc = (object: /*Superclass*/ Subclass) => {
    object.sayHello2();
}

// const superC = new Superclass();
const sub = new Subclass();

// myFunc(superC);
myFunc(sub);