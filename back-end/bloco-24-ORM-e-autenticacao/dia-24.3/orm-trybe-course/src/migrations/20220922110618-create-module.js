'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('modules', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      qtd_block: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('modules');
  }
};
