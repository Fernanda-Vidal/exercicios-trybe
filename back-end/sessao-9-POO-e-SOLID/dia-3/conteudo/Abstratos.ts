abstract class AnimalN {
    constructor(public name: string) {}
    abstract move(): void
}

class BirdN extends AnimalN {
    move() { console.log(`${this.name} está voando.`) }
}

class MammalN extends AnimalN {
    move() { console.log(`${this.name} estaá andando.`)}
}

class Fish extends AnimalN {
    move() { console.log(`${this.name} está nadando.`)}
}

const aN = new Fish('Tubarão');
const bN = new BirdN('Papagaio');
const cN = new MammalN('Urso');

const myMoveN = (animal: AnimalN) => animal.move();

myMoveN(aN);
myMoveN(bN);
myMoveN(cN);