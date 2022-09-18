const express = require('express');
const booksController = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', booksController.callGetBooks);


module.exports = app;