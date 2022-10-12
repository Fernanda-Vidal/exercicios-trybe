"use strict";
// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
// Altere a visibilidade dos atributos definidos na classe Tv para private.
// Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
class TV {
    constructor(b, s, r, c, cT) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connection = c;
        this._connectedTo = cT;
    }
    turnOn() {
        console.log(`Turn on TV:${this._brand}, ${this._size}, ${this._resolution}, ${this._connection}`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        if (!value || this._connection.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new TV("LG", 32, "Full HD", "HDMI");
console.log(tv1);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log('Connected to:', tv1.connectedTo);
