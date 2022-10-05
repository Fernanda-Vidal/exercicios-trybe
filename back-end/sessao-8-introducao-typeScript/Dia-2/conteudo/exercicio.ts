// Conteudo
type Point = {
    x: number,
    y: number,
};

function printCoord(pt: Point) {
    console.log('O valor da coordenada x é:' + pt.x);
    console.log('O valor da coordenada y é:' + pt.y);
}

printCoord({ x: 200, y: 100 })

// Pra fixar
type Bird = {
    wings: 2,
    beaks: 1,
    biped: true,
};

type Sum = (x: number, y: number) => number;

type Address = {
    street: string,
    number: string, 
    district: string, 
    city: string,
    state: string,
};