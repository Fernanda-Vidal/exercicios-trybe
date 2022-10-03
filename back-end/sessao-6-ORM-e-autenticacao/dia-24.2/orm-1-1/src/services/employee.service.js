const { Address, Employee } = require('../models/');

const getAll = async () => {
    const users = await Employee.findAll({
        include: { model: Address, as: 'addresses' },
    });

    return users;
};

// **Função em Eager Loading**
// const getById = async (id) => {
//     const employee = await Employee.findOne({
//         where: { id },
//         include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
//     });
//     return employee;
// };

// **Função em Lazy Loading**
const getById = async (id) => {
    const employee = await Employee.findOne({
        where: { id },
    });
    return employee;
};

module.exports = {
    getAll,
    getById,
 };