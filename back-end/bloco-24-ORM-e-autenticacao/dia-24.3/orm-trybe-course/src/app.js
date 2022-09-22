const express = require('express');
const routesCourse = require('./routes/router');
const routesStudent = require('./routes/student.router');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/course', routesCourse);
app.use('/student', routesStudent);

app.use(errorMiddleware);

module.exports = app;