const express = require('express');
const { validateTeam, existingId } = require('../middlewares/middlewares');
const apiCredentials = require('../middlewares/apiCredentials');
let { teams, nextId } = require('../files/teams');

// cria um router middleware
const router = express.Router();

// o path é relativo à rota em que o router foi montado (2)
router.get('/', (req, res) => res.json(teams));

// configurações globais afetam apenas ao router (3)
router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      res.json(team);
});

router.post('/teams', validateTeam, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

router.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      const index = teams.indexOf(team);
      const updated = { id, ...req.body };
      teams.splice(index, 1, updated);
      res.status(201).json(updated);
});

router.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(200);
});

router.use((req, res) => res.sendStatus(404));

router.use((err, _req, _res, _next) => {
    res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
})

module.exports = router;