// THROW E TRY/CATCH 

// Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, 
// devemos lançar uma exceção, que vai interromper o funcionamento do código. 
// Essa é a função do throw :
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '4'));

//   Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para
//  que ela não tenha funcionalidades demais.
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));

  // ---------------------------------------------------------
// OBJETOS PARTE I

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
// customer.newKey = lastName;  //   essa notação não funciona porque o javascript não reconhece o newKey como uma variável e sim como uma nova propriedade.

  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

//   Para fixar:
// Não deu certo!!!!!!!!!!!!!!

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

// function addKey(objeto, chave, valor){
//     let getObject = objeto;
//     let newKey = chave;
//     let propriedade = valor;
    
   
//  getObject[newKey] = propriedade;

//  return getObject;
// }

// console.log(addKey('customer', 'naturalidade', 'sãoPaulo'));


// ----------------------------------------------------------
// OBJETOS PARTE II:

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

//   for(keys in coolestTvShow){
//       console.log(keys);
//   }

console.log(Object.keys(coolestTvShow));



const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  function showHabilities (student){
    let getObject = Object.keys(student);
    for (let i in getObject){
        // pq com return não completa o laço?
        //  return `${getObject[i]}, Nível: ${student[getObject[i]]}`;
        console.log(`${getObject[i]}, Nível: ${student[getObject[i]]}`);
    }
  }
// Porque deste jeito aparece uma propriedade Indefined no fim? 
//   console.log(showHabilities(student1));
//   console.log(showHabilities(student2));

// E deste jeito não? acredito que é por causa do console.log 2x, mas pq o return não completa o laço?
  console.log('Estudante 1');
  showHabilities(student1);

  console.log('Estudante 2');
  showHabilities(student2);


// -----------------------------------------------------------
//   PARTE III:

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
//   }
  

  console.log(Object.values(coolestTvShow));


  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
//   // Com Object.values
  console.log(listSkillsValuesWithValues(student));


  // -------------------------------------------------------------
// PARTE IV
// Object.entries 

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};


// ----------------------------------------------------
// PARTE V:
// Object.assign

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
  age: 4,
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


// Desta forma, o cloneObj tbm altera as duas variáveis:
let obj = { value1: 10, value2: 11 };
let cloneObj = obj;
console.log(cloneObj);

cloneObj = {value1: 2, value2: 230};
console.log(obj);


// Para que isso não aconteça:
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);