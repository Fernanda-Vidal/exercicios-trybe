abstract class Character {
    constructor(public name: string) {}
    abstract talk(): void
    abstract specialMove(): void   
}

class MeleeCharacter extends Character {
   talk(): void {
       console.log(`My name is ${this.name}`)
   } 

   specialMove(): void {
       console.log(`${this.name} punch the oponent!`)
   }
}

class LongRangeCharacter extends Character {
    talk(): void {
        console.log(`I'm the biggest ${this.name}`)
    }

    specialMove(): void {
        console.log(`${this.name} kicks the oponent!`)
    }
}

const battle = (character: Character) => {
    character.talk();
    character.specialMove();
}

const chunLi = new LongRangeCharacter('Chun-Li');
const saitama = new MeleeCharacter('Saitama');

battle(chunLi);
battle(saitama);