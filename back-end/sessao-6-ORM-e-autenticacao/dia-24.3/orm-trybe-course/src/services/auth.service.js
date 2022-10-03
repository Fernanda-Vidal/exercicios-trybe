const { Student } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
    if (!email || !password) {
        const status = 401;
        const message = 'Email and password are required';
        throw { status, message }
    }

    const student = await Student.findOne({
        attributes: ['id', 'email', 'name'],
        where: { email, password }
    });

    if (!student) {
        const status = 401;
        const message = 'Email or password doesnt exist';
        throw { status, message }
    };

    const token = generateToken(student.dataValues); //dataValues é a chave que o sequelize retorna do método findOne.

    return { token }
};

module.exports = {
    authenticate,
};