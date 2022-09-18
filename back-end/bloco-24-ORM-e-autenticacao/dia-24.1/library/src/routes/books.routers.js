const { Router } = require('express');
const booksControlers = require('../controllers/book.controller');

const routers = Router();

routers.get('/', booksControlers.callGetBooks);
routers.get('/:id', booksControlers.callGetById);
routers.post('/', booksControlers.insertBook);

module.exports = routers;