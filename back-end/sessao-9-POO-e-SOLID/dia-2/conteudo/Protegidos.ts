class AnimalN {
    constructor(protected birthDate: Date) {}
}

class BirdN extends AnimalN {
    showBirthDate() {
        console.log(this.birthDate)
    }
}
