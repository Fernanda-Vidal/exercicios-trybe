"use strict";
class AnimalN {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
class BirdN extends AnimalN {
    constructor(name) {
        super(new Date());
        this.name = name;
    }
    showBirthDate() {
        console.log(this.birthDate);
    }
}
