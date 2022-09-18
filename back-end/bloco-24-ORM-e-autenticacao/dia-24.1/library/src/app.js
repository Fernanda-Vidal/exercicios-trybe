const express = require('express');
require('express-async-errors');
const bookRoute = require('./routes/books.routers');

const app = express();

app.use(express.json());

app.get('/books', bookRoute);


module.exports = app;