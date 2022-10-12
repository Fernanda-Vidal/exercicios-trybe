"use strict";
class Fish {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        let timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    getBirthDate() { return this.birthDate; }
    swim() { console.log(`${this.name} is swimming!`); }
}
const goldFish = new Fish('Little Gold Fish', new Date(Date.parse('Aug 16, 2015')));
console.log(goldFish.age);
goldFish.swim();
