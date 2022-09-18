const express = require('express');
require('express-async-errors');
const bookRoute = require('./routes/books.routers');

const app = express();

app.use(express.json());

app.use('/books', bookRoute)

// app.get('/books', (req, res) =>{
//     res.status(200).json({ message: 'entrou'})
// });


module.exports = app;