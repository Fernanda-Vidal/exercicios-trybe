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
    
        const book = await bookService.insert({ title, author, pageQuantity });
        return res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Não rolou' })
    }
};

const callUpdateBook = async (req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
        const { id } = req.params;

        const book = await bookService.updateBook(id, title, author, pageQuantity);
        return res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Tente mais uma vez' });
    }
}

const callDeleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        await bookService.deleteBook(id);
        return res.status(200).json({ message: 'livro deletado com sucesso' });
    } catch (e) {
        res.status(500).json({ message: 'Nope.' });
    }
};

module.exports = {
    callGetBooks,
    callGetById,
    insertBook,
    callUpdateBook,
    callDeleteBook,
}