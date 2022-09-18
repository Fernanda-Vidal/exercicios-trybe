const  bookService = require('../services/book.service');

const callGetBooks = async (_req, res) => {
    const books = await bookService.getBooks();
    
    return res.status(200).json(books);
};

const callGetById = async(req, res) => {
    const { id } = req.params;
    const { type, message } = await bookService.getBookById(id);

    if (type === null) res.status(200).json(message);
    return res.status(404).json(message);
}

module.exports = {
    callGetBooks,
    callGetById,
}