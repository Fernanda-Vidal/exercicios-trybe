class Vehicle {
    constructor(
        public brand: string,
        private _automaker: string) {}
    
    public speed(): string {
        console.log(`O ${this.brand} acelera!`)
        return `O ${this.brand} acelera!`
    }
}

class Car extends Vehicle {
    constructor(brand: string, automaker: string) {
        super(brand, automaker);
    }

    public speed(): string {
        console.log(`Acelera o ${this.brand}`)
        return super.speed() + `Acelera o ${this.brand}`;
    }
}

const carro = new Car ('Polo', 'VW');
carro.brand;
carro.speed();