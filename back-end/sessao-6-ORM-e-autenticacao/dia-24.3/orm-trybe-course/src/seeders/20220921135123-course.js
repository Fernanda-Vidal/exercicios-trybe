'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
   await queryInterface.bulkInsert('courses', [
    {
      name: 'Fullstack',
      description: 'Formação de P. Desenvolvedora Fullstack Junior',
      active: true,
      duration: 12,
    },
    {
      name: 'Backend',
      description: 'Formação de P. Desenvolvedora Back-end Junior',
      active: true,
      duration: 7,
    },
    {
      name: 'Mobile',
      description: 'Formação de P. Desenvolvedora Mobile Junior',
      active: false,
      duration: 7,
    },
   ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
