'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'id_course', {
      type: Sequelize.INTEGER,
      allowNull: false, 
      references: {
        model: 'courses', //tabela
        key: 'id' // coluna
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('students', 'id_course');
  }
};
