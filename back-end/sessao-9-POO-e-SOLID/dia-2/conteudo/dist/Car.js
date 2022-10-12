"use strict";
class Vehicle {
    constructor(brand, _automaker) {
        this.brand = brand;
        this._automaker = _automaker;
    }
    speed() {
        console.log(`O ${this.brand} acelera!`);
        return `O ${this.brand} acelera!`;
    }
}
class Car extends Vehicle {
    constructor(brand, automaker) {
        super(brand, automaker);
    }
    speed() {
        console.log(`Acelera o ${this.brand}`);
        return super.speed() + `Acelera o ${this.brand}`;
    }
}
const carro = new Car('Polo', 'VW');
carro.brand;
carro.speed();
