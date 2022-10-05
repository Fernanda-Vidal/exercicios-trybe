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

// Exercicio pra fixar
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

// Exercicio pra fixar
type StatsOfMatter = 'liquid' | 'solid' | 'gaseous';

type rg = string | number;

type OS = 'linux' | 'mac' | 'windowns';

type vowels = 'a' | 'e' | 'i' | 'o' | 'u';

//  Conteúdo CLASSES
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

// Exercício pra fixar

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

// Conteudo - INTERFACE

interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

interface Teacher extends Employee {
    subject: string;
    sayHello(): string;
}

let teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullName(): string { return this.firstName + ' ' + this.lastName; },
    subject: 'Matemática',
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}.`;
    },
}

console.log(teacher);

// Conteudo TYPE ASSERTION
type Address = {
    street: string,
    number: number | null,
  }
  
  type User = {
    name: string,
    email: string,
    password: string,
  }
  
  // função que converte de string para json
  function stringToJson(str: string): unknown {
    const result = JSON.parse(str);
    return result;
  }
  
  // utilizando o "as" para converter de unknown para User
  const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User
  
  // Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
  const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')
  
  user.name;
  address.street;