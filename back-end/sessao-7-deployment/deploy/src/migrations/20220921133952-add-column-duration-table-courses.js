'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'duration', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'active',
    });
    },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.removeColumn('courses', 'duration');
  }
};
