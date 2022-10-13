interface IPerson {
    id: number;
    name: string;
    showIdentification(): void;
}

class PhysicalPerson implements IPerson {
    private static lastId = 0;
    private _name;
    private _id;
    private _cpf;

    constructor(name: string, cpf: string) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }

    private static newId() { return this.lastId += 1 };
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements IPerson {
    private static lastId = 0;
    private _name;
    private _id;
    private _cnpj;

    constructor(name: string, cnpj: string) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }

    private static newId() { return this.lastId += 1 }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification(): void { console.log(this.id, this.cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '465665445645');

const showIdentification = (person: IPerson) => {
    person.showIdentification();
}

showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

// GENERICS
class Contract<T> {
    static _number = 0;
    constructor(public broker: T) {}
    static get number() { return this._number; }
}

// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // Typescript advinha que pp0 é pessoa fisica
console.log(c1.broker.cpf);

const c2 : Contract<LegalPerson> = new Contract(lp); //Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj);

