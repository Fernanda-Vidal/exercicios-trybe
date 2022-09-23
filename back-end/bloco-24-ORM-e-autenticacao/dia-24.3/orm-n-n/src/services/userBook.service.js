const { User, Book } = require('../models/');
// const Book = require('../models/Book.js');
// const User = require('../models/User.js');

// const getUser = async () => User.findAll({
//     include: [
//         { 
//             model: Book,
//             as: 'books', 
//             through: { attributes: [] }
//         }]
// })

const getUserBooksById = async (id) => User.findOne(console.log('service', id), {
    where: { id },
    include: [
        { 
            model: Book,
            as: 'books', 
            through: { attributes: [] }
        }
    ],
});

module.exports = {
    getUserBooksById,
    // getUser,
};