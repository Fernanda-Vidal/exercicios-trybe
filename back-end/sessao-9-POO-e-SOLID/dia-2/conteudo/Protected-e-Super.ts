class AnimalN {
    constructor(protected birthDate: Date) {}
}

class BirdN extends AnimalN {
    constructor(public name: string) {
        super(new Date());
    }
    showBirthDate() {
        console.log(this.birthDate)
    }
}
