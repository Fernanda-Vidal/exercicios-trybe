const fs = require('fs').promises;
const { join } = require('path');


const readCacaoTrybeFile = async () => {
    const path = '/files/cacaoTrybeFile.json';
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
        return JSON.parse(contentFile);
    } catch (error) {
        return null;
    }
}; 

const getAllChocolates = async () => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesBySearch = async (q) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.includes(q));
}

const writeCacaoTrybe = async (content) => {
    const path = '/files/cacaoTrybeFile.json';
    try {
        const completePath = join(__dirname, path);
        await fs.writeFile(completePath, JSON.stringify(content));
    } catch (error) {
        return null;
    }
};

const editChocolates = async (id, change) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    const chocolateToUpdate = cacaoTrybe.chocolates.find((chocolate) => chocolate.id === id)
console.log(chocolateToUpdate)
    if (chocolateToUpdate) {
        cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
            if (chocolate.id === id) return { ...chocolate, ...change };
            return chocolate;
        });

        await writeCacaoTrybe(cacaoTrybe);
        return { ...chocolateToUpdate, ...change };
    }

    return false;
}


module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getChocolatesBySearch,
    editChocolates,
}