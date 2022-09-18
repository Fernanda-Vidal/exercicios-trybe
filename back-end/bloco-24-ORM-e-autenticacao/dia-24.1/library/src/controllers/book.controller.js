const  bookService = require('../services/book.service');

const callGetBooks = async (_req, res) => {
    const books = await bookService.getBooks();
    return books;
}

module.exports = {
    callGetBooks,
}