const { Book } = require('../models');

const getBooks = async () => Book.findAll();

const getBookById = async (id) => {
    const book = await Book.findByPk(id);
    if (book === null) {
        return { type: 'BOOK_DOESNT_EXIST', message: 'Book not found' };
    } 
    return { type: null, message: book };
}

module.exports = { 
    getBooks,
    getBookById,
};