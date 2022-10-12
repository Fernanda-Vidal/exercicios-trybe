interface User {
    id?: number;
    name: string;
    age: number;
}

class UserModel {
    private database: User[] = [];
    private lastId = 0;

    create(user: User) {
        const newUser = { ...user, id: this.lastId +=1 };
        this.database.push(newUser);

        return newUser;
    }

    getAll(): User[] {
        return [...this.database];
    }
}

class UserService {
    constructor(protected userModel: UserModel) {}

    create(user: User): User {
        if (user.age > 200) {
            throw new Error ('Idade um pouco avançada!')
        }
        return this.userModel.create(user);
    }

    getAll() {
        return this.userModel.getAll();
    }
}

const userModel = new UserModel();
const userService = new UserService(userModel);

const kaua = userService.create({ name: 'Kauã', age: 8 });
const alicia = userService.create({ name: 'Alícia', age: 8 });
// const joaozinho = userService.create({ name: 'Joaozinho', age: 201 });

console.log(userService.getAll());