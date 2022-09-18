const express = require('express');
const routerActivities = require('./routes/activitiesRoutes');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(routerActivities);
app.use(userRouter);



module.exports = app;
