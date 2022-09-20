const { User, Book } = require('../models/');

const getUserBooksById = async (id) => User.findOne(console.log('service', id), {
    where: { id },
    include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
    getUserBooksById,
};