class Animal {
    constructor(public name: string) {}
 
    move() { console.log(`${this.name} está se movendo.`) }
    sleep() { console.log(`${this.name} está dormindo.`) }
}

class Bird extends Animal {
    move() { 
        super.move();
        console.log(`${this.name} está voando.`)
        super.sleep();
    }
}

class Mammal extends Animal {
    move() { 
        super.sleep();
        console.log(`${this.name} está andando.`) }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const c = new Mammal('Tatu');

const myMove = (animal: Animal) => {
    animal.move();
}

myMove(a);
myMove(b);
myMove(c);

const d = new Mammal('Urso');

myMove(d);

