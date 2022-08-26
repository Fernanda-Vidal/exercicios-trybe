const express = require('express');
const routerActivities = require('./routes/activitiesRoutes');

const app = express();
app.use(express.json());
app.use(routerActivities);



module.exports = app;
