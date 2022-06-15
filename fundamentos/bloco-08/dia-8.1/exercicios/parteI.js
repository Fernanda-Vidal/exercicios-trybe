// Parte I - Game Actions Simulator

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
//   O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const attackDragon = (dragon) => {
  const min = 15;
  const result = (Math.floor(Math.random() * (dragon.strength - min + 1) + min));
  return result;
}

// console.log(attackDragon(dragon));

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const attackWarrior = () => {
  const result = (Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength))
  return result;
}

// console.log(attackWarrior());
// 
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const attackMago = () => {
const objReturn = {
  dano: 0,
  manaGasta: '',
}

if (mage.mana < 15) {
  objReturn.dano = 'Não possui mana suficiente';
  objReturn.manaGasta = 0;
} else {
  objReturn.dano =  Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
  objReturn.manaGasta = 15;
}
return objReturn;
}

// console.log(attackMago());

// PARTE II 

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {

  turnWarrior: (callback) => {
    const damage = callback();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
    // console.log(warrior.damage)
    // console.log(dragon.healthPoints)
  },
  turnMage: (callback) => {
    const damage = callback();
    mage.damage = damage.dano;
    mage.mana -= damage.manaGasta;
    dragon.healthPoints -= damage.dano;
    // console.log(mage.damage)
    // console.log(mage.mana)
    // console.log(dragon.healthPoints)
  },
  turnDragon: (callback) => {
    const damage = callback(dragon);
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
    // console.log(mage.healthPoints);
    // console.log(warrior.healthPoints);
    // console.log(dragon.damage);
  },
  finalBattle: () => {
    return battleMembers;
  },
};

gameActions.turnWarrior(attackWarrior);
gameActions.turnMage(attackMago);
gameActions.turnDragon(attackDragon);
console.log(gameActions.finalBattle());



