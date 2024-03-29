interface ICharacter {
    name: string;
    specialMove2: string;
}

interface IDbCharacter extends ICharacter {
    id: number;
}

const db: IDbCharacter[] = [];

interface IModel {
    create: (character: ICharacter) => Promise<IDbCharacter>;
    update: (id:number, character: ICharacter) => Promise<IDbCharacter>;
    delete: (id: number) => Promise<boolean>;
    getAll: () => Promise<IDbCharacter[]>;
    getById: (id: number) => Promise<IDbCharacter>;
}

class LocalDbModel implements IModel {
    create = async (character: Omit<ICharacter, 'id'>) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
    };

    findIndexById = (id: number) => {
        const index = db.findIndex((character) => character.id === id);
        if (index < 0) throw new Error('Character not found');
        return index;
    };

    update = async (id: number, character: ICharacter) => {
        const indexToUpdate = this.findIndexById(id);
        db[indexToUpdate] = { ...db[indexToUpdate], ...character };
        return db[indexToUpdate];
    }

    delete = async (id: number) => {
        const indexToDelete = this.findIndexById(id);
        const deletedItem = db.splice(indexToDelete, 1);
        if (deletedItem.length > 0) return true;
        return false;
    }

    getAll = async () => db;

    getById = async (id: number) => {
        const indexToGet = this.findIndexById(id);
        return db[indexToGet];
    }
}

class CharacterService {
    constructor(readonly model: IModel) {}

    async create(character: ICharacter) {
        const newCharacter = await this.model.create(character);
        return ({ status: 201, data: newCharacter });
    }

    async getAll() {
        const allCharacter = await this.model.getAll();
        return ({ status: 200, data: allCharacter });
    }

    async getById(id:number) {
        const character = await this.model.getById(id);
        return ({ status: 200, data: character });
    }

    async update(id: number, character: ICharacter) {
        const updateCharacter = await this.model.update(id, character);
        return ({ status: 200, data: updateCharacter });
    }

    async delete (id: number) {
        const charDel = await this.model.delete(id);
        return ({ status: 200, data: charDel });
    }
}

class MockDbModel implements IModel {
    async create(character: ICharacter) {
        console.log('character created');
        return { id: 1, name: 'Peach', specialMove2: 'Toad' };
    }

    async update(id:number, character: ICharacter) {
        console.log('character updated');
        return { id: 1, name: 'Yoshi', specialMove2: 'Egg Lay' };
    }

    async delete(id: number) {
        console.log('character deleted');
        return true;
    }

    async getAll() {
        return [
            { id: 1, name: 'Samus', specialMove2: 'Charge Shot' },
            { id: 2, name: 'Kirby', specialMove2: 'Inhale' },
        ];
    }

    async getById(id: number) {
        return { id: 1, name: 'Mario', specialMove2: 'Fireball' };
    }
}


const A = new CharacterService(new LocalDbModel());
A.create({ name: 'Chun-Li', specialMove2: 'kicks' })
A.getAll().then(console.log);
A.getById(1).then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
B.getById(1).then(console.log);