const express = require('express');
require('express-async-errors');

const { validateTeam, existingId } = require('./middlewares/middlewares');
let { teams, nextId } = require('./files/teams');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

// let nextId = 3;
// const teams = [
//   { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
//   { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
// ];

app.use(express.json());
app.use(apiCredentials);

// const existingId = (req, res, next) => {
//     const id = Number(req.params.id);
//     if (teams.some((t) => t.id === id)) {
//         next();
//     } else {
//         res.sendStatus(404);
//     }
// };

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      res.json(team);
});

// const validateTeam = (req, res, next) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//         next(); // Chama o próximo middleware
//     } else {
//         res.sendStatus(400); // Ou já responde avisando qe deu errado
//     }
// };

app.post('/teams', validateTeam, (req, res) => {
    if (
        // confere se a sigla propsota está inclusa nos time autorizados
        !req.teams.teams.includes(req.body.sigla)
        // confere se já não existe um time com essa sigla
        && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
        return res.sendStatus(401);
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      const index = teams.indexOf(team);
      const updated = { id, ...req.body };
      teams.splice(index, 1, updated);
      res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(200);
});

module.exports = app;
