const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
    const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
    console.log(data);
} catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
}

// Para utilizar operações assíncronas do fs:

const fs = require('fs').promises;

async function main() {
    try {
        const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

main();
