const { Book } = require('../models');

const getAllBooks = async () => {
    const books = await Book.findAll();
    return books;
};

const insert = async (book) => {
    console.log(book)
    return Book.create(book);
};

const getBookById = async (id) => {
    const book = await Book.findByPk(id);
    if (book === null) {
        return { type: 'BOOK_DOESNT_EXIST', message: 'Book not found' };
    } 
    return { type: null, message: book };
};

const updateBook = async (id, title, author, pageQuantity) => {
    const [updateBook] = await Book.update(
        { title, author, pageQuantity },
        { where: { id }},
    );

    return updateBook;
};

const deleteBook = async(id) => {
    const book = await Book.destroy(
        { where: { id } },
    );

    return book;
}

module.exports = { 
    getAllBooks,
    getBookById,
    insert,
    updateBook,
    deleteBook,
};