'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_modules', // tabela que estou criando
     {
      id_course: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses", // tabela que a coluna id_course está referenciando
          key: "id"         // na chave id
        },
        onDelete: "CASCADE",
        primaryKey: true
      },
      id_module: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "modules", // tabela que a coluna id_module está referenciando
          key: "id"         // na chave id
        },
        onDelete: "CASCADE",
        primaryKey: true
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('course_modules');
  }
};
