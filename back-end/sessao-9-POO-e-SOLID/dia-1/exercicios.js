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
