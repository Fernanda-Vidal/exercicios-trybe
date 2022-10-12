"use strict";
class ConsoleLogger {
    log(param) {
        console.log(param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log(`Log2: ${param}`);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
}
const loggerOne = new ConsoleLogger();
const loggerTwo = new ConsoleLogger2();
const exampleOne = new ExampleDatabase(loggerOne);
const exampleTwo = new ExampleDatabase(loggerTwo);
const exampleEmpty = new ExampleDatabase();
exampleOne.save('chave 1', 'valor 1');
exampleTwo.save('chave 2', 'valor 2');
exampleEmpty.save('chave 3', 'valor 3');
