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
    create = async (character: ICharacter) => {
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
    constructor(readonly model: LocalDbModel) {}

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