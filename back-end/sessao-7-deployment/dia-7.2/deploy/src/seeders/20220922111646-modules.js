'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('modules', [
      {
      name: "Fundamentos",
      description: "Base para programação",
      duration: 2,
      qtd_block: 8,
    },
    {
      name: "Frontend",
      description: "Base para programação frontend",
      duration: 2,
      qtd_block: 9,
    },
    {
      name: "Backend",
      description: "Base para programação backend",
      duration: 7,
      qtd_block: 13,
    },
    {
      name: "CS",
      description: "Base para programação CS",
      duration: 2,
      qtd_block: 5,
    },
    {
      name: "Nest.JS",
      description: "Base para Nest.JS",
      duration: 2,
      qtd_block: 6,
    },
    {
      name: "React Native",
      description: "Base para programação Mobile com React",
      duration: 2,
      qtd_block: 5,
    },
    {
      name: "Flutter",
      description: "Base para programação Mobile com Flutter",
      duration: 2,
      qtd_block: 5,
    },
  ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('modules', null, {});
  }
};
