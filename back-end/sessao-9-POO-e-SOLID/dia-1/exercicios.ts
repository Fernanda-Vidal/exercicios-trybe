// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class TV {
    brand: string;
    size: number;
    resolution: string;
    connection: string;
    connectedTo?: string;

    constructor (b: string, s: number, r: string, c: string, cT?: string) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connection = c;
        this.connectedTo = cT;
    }

    turnOn() {
        console.log(`Turn on TV:${this.brand}, ${this.size}, ${this.resolution}, ${this.connection} ${this.connectedTo}`);
    }
}

const tv1 = new TV("LG", 32, "Full HD", "HDMI");

console.log(tv1)
tv1.turnOn();

// Altere a visibilidade dos atributos definidos na classe Tv para private.

// Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.

// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class TV2 {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connection: string[];
    private _connectedTo?: string;

    constructor (b: string, s: number, r: string, cT?: string) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connection = ["HDMI", "Ethernet"];
        this._connectedTo = cT;
    }

    turnOn() {
        console.log(`Turn on TV:${this._brand}, ${this._size}, ${this._resolution}, ${this._connection} ${this._connectedTo}`);
    }

    // get connectedTo() {
    //     return this._connectedTo as string;
    // }

    set connectedTo(conn: string) {
        if (this._connection.includes(conn)) {
            this._connectedTo = conn;
        }
        else {
            console.log("Sorry, connection unavailable")
        };
    }
}

const tvOi = new TV2("LG", 32, "Full HD")

// console.log(tvOi.connectedTo);
tvOi.connectedTo = 'HDMI'
console.log(tvOi.connectedTo);
