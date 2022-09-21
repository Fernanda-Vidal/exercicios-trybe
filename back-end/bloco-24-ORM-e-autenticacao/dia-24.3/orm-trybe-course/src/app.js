const express = require('express');
const routes = require('./routes/router');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/course', routes);

app.use(errorMiddleware);

module.exports = app;