"use strict";
class UserModel {
    constructor() {
        this.database = [];
        this.lastId = 0;
    }
    create(user) {
        const newUser = Object.assign(Object.assign({}, user), { id: this.lastId += 1 });
        this.database.push(newUser);
        return newUser;
    }
    getAll() {
        return [...this.database];
    }
}
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(user) {
        if (user.age > 200) {
            throw new Error('Idade um pouco avançada!');
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
