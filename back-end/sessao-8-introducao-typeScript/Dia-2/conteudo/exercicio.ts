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

// Aula
export type User = {
    name: string,
    cpf: string,
    age: string,
    address: Address
}

export type Doctor = {
    crm: string,
    specialist: string,
} & User;

// Conteudo
function imprimirCPF(cpf: number | string) {
    console.log('Seu CPF é:' + cpf);
}

imprimirCPF(11111111111);
imprimirCPF('111.111.111-11')

// Exercicio
type StatsOfMatter = 'liquid' | 'solid' | 'gaseous';

type rg = string | number;

type OS = 'linux' | 'mac' | 'windowns';

type vowels = 'a' | 'e' | 'i' | 'o' | 'u';