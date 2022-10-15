/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(
    public name: string,
    // o igual define um valor default, se o segundo parâmetro não for passado, este será utilizado.
    public instrument: Instrument = new Flute('Minha flauta'),
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`,
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();