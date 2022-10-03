'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [{
     title: 'O Hobbit', 
     author: 'J. R. R. Tolkien',
     pageQuantity: "328",
     createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
    {
    title: 'Senhor dos Anéis', 
    author: 'J. R. R. Tolkien',
    pageQuantity: "1568",
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('books', null, {})
  }
};
