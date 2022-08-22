const fs = require('fs').promises;

const read = async () => await fs.readFile('simpsons.json', 'utf-8');

const main = async () => {
    const fileContent = await read();
    const simpsons = JSON.parse(fileContent);
    const returnString = simpsons.map(({ id, name }) => `${id} - ${name}`)
    console.log(returnString);
}

main();