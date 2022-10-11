// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
var TV = /** @class */ (function () {
    function TV(b, s, r, c, cT) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connection = c;
        this.connectedTo = cT;
    }
    TV.prototype.turnOn = function () {
        console.log("Turn on TV:".concat(this.brand, ", ").concat(this.size, ", ").concat(this.resolution, ", ").concat(this.connection, " ").concat(this.connectedTo));
    };
    return TV;
}());
var tv1 = new TV("LG", 32, "Full HD", "HDMI");
console.log(tv1);
tv1.turnOn();
// Altere a visibilidade dos atributos definidos na classe Tv para private.
// Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
var TV2 = /** @class */ (function () {
    function TV2(b, s, r, cT) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connection = ["HDMI", "Ethernet"];
        this._connectedTo = cT;
    }
    TV2.prototype.turnOn = function () {
        console.log("Turn on TV:".concat(this._brand, ", ").concat(this._size, ", ").concat(this._resolution, ", ").concat(this._connection, " ").concat(this._connectedTo));
    };
    Object.defineProperty(TV2.prototype, "connectedTo", {
        // get connectedTo() {
        //     return this._connectedTo as string;
        // }
        set: function (conn) {
            if (this._connection.includes(conn)) {
                this._connectedTo = conn;
            }
            else {
                console.log("Sorry, connection unavailable");
            }
            ;
        },
        enumerable: false,
        configurable: true
    });
    return TV2;
}());
var tvOi = new TV2("LG", 32, "Full HD");
// console.log(tvOi.connectedTo);
tvOi.connectedTo = 'HDMI';
console.log(tvOi.connectedTo);
