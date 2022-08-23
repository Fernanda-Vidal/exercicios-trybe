const express = require('express');

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

const app = express();
app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(activity);
});

module.exports = app;