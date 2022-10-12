"use strict";
class AnimalN {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
class BirdN extends AnimalN {
    showBirthDate() {
        console.log(this.birthDate);
    }
}
