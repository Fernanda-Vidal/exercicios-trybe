interface ILogger {
    log(param: string): void;
}

class ConsoleLogger implements ILogger {
    log(param: string) {
        console.log(param);
    }
}

class ConsoleLogger2 implements ILogger {
    log(param: string) {
        console.log(`Log2: ${param}`);
    }
}

interface IDatabase {
    logger: ILogger;
    save(key: string, value: string): void;
}

class ExampleDatabase implements IDatabase {
    constructor(public logger: ILogger = new ConsoleLogger()) { }

    save(key: string, value: string): void {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
}

const loggerOne = new ConsoleLogger();
const loggerTwo = new ConsoleLogger2();

const exampleOne = new ExampleDatabase(loggerOne);
const exampleTwo = new ExampleDatabase(loggerTwo)
const exampleEmpty = new ExampleDatabase();

exampleOne.save('chave 1', 'valor 1');
exampleTwo.save('chave 2', 'valor 2');
exampleEmpty.save('chave 3', 'valor 3');