const { Book } = require('../models');

const getBooks = async () => Book.findAll();

module.exports = { 
    getBooks,
};