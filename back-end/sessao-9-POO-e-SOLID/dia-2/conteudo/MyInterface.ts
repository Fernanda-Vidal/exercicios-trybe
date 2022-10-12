interface IMyInterface {
    myNumber: number;
    myFunc(myParam:number): string; 
}

class MyClass implements IMyInterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
        return `myNumber + myParam = ${this.myNumber + myParam}`
    }
} 

const teste = new MyClass(9);
console.log(teste.myNumber);
console.log(teste.myFunc(79));