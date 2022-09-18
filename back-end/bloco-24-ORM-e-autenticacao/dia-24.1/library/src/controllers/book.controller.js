const  bookService = require('../services/book.service');

const callGetBooks = async (_req, res) => {
    try {
        const books = await bookService.getAllBooks();
        return res.status(200).json(books);
    } catch (e) {
        res.status(500).json({message: 'Algo de errado não está certo'});
    }
    
};

const callGetById = async(req, res) => {
    try {
        const { id } = req.params;
        const { type, message } = await bookService.getBookById(id);

        if (type === null) res.status(200).json(message);
        return res.status(404).json(message);
    } catch (e) {
        res.status(500).json({ message: 'Deu ruim'});
    }
};

const insertBook = async(req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
    
        const book = await insert({ title, author, pageQuantity });
        return res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Não rolou' })
    }
}

module.exports = {
    callGetBooks,
    callGetById,
    insertBook,
}