const { Op } = require('sequelize'); // atributo Operação do sequelize.
const { Course, Student } = require('../models');

const getStudents = async () => Student.findAll({
    include: {
        model: Course,
        as: 'course'
    },
    attributes: ['name', ['email', 'endereço eletrônico']]
    // attributes: {
        // exclude: ['password', 'idCourse'],
    // },
    // where: {
    //     [Op.and]: [
    //         {[Op.or]: [{ active:true }, { password: "pessoa1" }] },
    //         { name: 'Pessoa Estudante' }
    //     ]
    // }
});

module.exports = { getStudents };