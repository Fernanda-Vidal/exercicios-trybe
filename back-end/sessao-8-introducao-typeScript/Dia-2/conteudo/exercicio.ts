// Conteudo Aliases
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

// Conteudo Type Union
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

//  Conteúdo Classes
class Person {
    name: string;
    birthDate: Date;
    age?: number;
    constructor(name: string, birthDate: Date, age?: number) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`);
    }

    walk(): void {
        console.log(`${this.name} está andando.`);
    }
}

const person1 = new Person('Jane Doe', new Date('1986-01-01'), 27);
const person2 = new Person('Jon Doe', new Date('1980-08-05'), 42);
const person3 = new Person('Jhony Doe', new Date('1987-03-09'));

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();

console.log(person3);
person3.eat();

// Exercício

class Dog {
    name: string;
    color: string;
    age: number;
    breed?: string;
    constructor(name: string, color: string, age: number, breed?: string) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.breed = breed;
    }
}

class House {
    kitchen: boolean;
    bathroom: number;
    leavingRoom: boolean;
    diningRoom: boolean;
    bedroom: number;
    laundry: boolean;
    constructor(kitchen: boolean, bathroom: number, leavingRoom: boolean, diningRoom: boolean, bedroom: number, laundry: boolean) {
        this.kitchen = kitchen;
        this.bathroom = bathroom;
        this.leavingRoom = leavingRoom;
        this.diningRoom = diningRoom;
        this.bedroom = bedroom;
        this.laundry = laundry;
    }
}