import exp from "constants";

export function greeter(name:string):string {
    return  `Olá ${ name }!`;
}

export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function losangle(diagonB: number, diagonS: number): number {
    return (diagonB * diagonS) / 2 ;
}

export function trapeze(height: number, B: number, b: number): number {
    return ((B + b) * height) / 2;
}
export function circle(r: number): number {
    const PI:number = 3.14;
    return (r ** 2) * PI;
}

export enum WeekDays {
    Sunday = 1,
    Monday,
    Tuesday, 
    Wednesday,
    Thursday,
    Friday,
    Saturday
}