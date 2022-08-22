const { fdatasync } = require('fs');

const fs = require('fs').promises;

const read = async (file) => {
    const fileContent = await fs.readFile(file, 'utf-8')
    const simpsons = JSON.parse(fileContent);
    return simpsons;
};

// const main = async () => {
//     const fileContent = await read();
//     const simpsons = JSON.parse(fileContent);
//     const returnString = simpsons.map(({ id, name }) => `${id} - ${name}`)
//     console.log(returnString);

//     return simpsons;
// }

const dataCharacter = async (id) =>  {
        const fileContent = await read('simpsons.json');
        const simpsons = JSON.parse(fileContent)
        const simpsonId = simpsons.find((character) => Number(character.id) === id)
        
        if(!simpsonId) {
            throw new Error('id não encontrado');
        }
        
        return simpsonId;
}

const removeCharacter = async () => {
    const simpsons = await read('simpsons.json');
    return simpsons.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10)
}

const createDoc = async () => {
    const simpsons = await read('simpsons.json');
    const family = simpsons.filter(({ id }) => Number(id) <= 4 )
    return fs.writeFile('simpsonFamily.json', JSON.stringify(family));
}

const addCharacter = async () => {
    const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8')
    const simpsonsFam = JSON.parse(fileContent);
    simpsonsFam.push({ id: '8', name: 'Nelson Muntz' });
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFam));
}

const changeCharacter = async () => {
    const simpsons = await read('./simpsonFamily.json');
    const removeNelson = simpsons.filter(({ id }) => id !== '8')
    const simpsonWithMaggie = [...removeNelson, { id: '15', name: 'Maggie Simpson' }]
    
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonWithMaggie))
}

const main = () => {
    changeCharacter();
}

main();