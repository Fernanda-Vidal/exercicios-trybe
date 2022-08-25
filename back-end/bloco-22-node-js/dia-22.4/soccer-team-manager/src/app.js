const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
// require do router
const teamsRouter = require('./routes/teamsRouter');
// let { teams, nextId } = require('./files/teams');
// const apiCredentials = require('./middlewares/apiCredentials');
// const { validateTeam, existingId } = require('./middlewares/middlewares');

// let nextId = 3;
// const teams = [
//   { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
//   { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
// ];
    
const app = express();
app.use(morgan('dev'));
app.use(cors());
// o express.static configura para procurar o path no diretório informado e se encontrado
// já responde com esse aquivo. Se não encontrar, simplesmente passa para o o próximo e
// assume que alguém vai responder essa requisição.
app.use(express.static('./images'));
app.use(express.json());
// monta o router na rota /teams (1)
app.use('/teams', teamsRouter);
// app.use(apiCredentials);

// const existingId = (req, res, next) => {
//     const id = Number(req.params.id);
//     if (teams.some((t) => t.id === id)) {
//         next();
//     } else {
//         res.sendStatus(404);
//     }
// };

// app.get('/teams', (req, res) => res.json(teams));

// app.get('/teams/:id', existingId, (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find((t) => t.id === id);
//       res.json(team);
// });

// const validateTeam = (req, res, next) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//         next(); // Chama o próximo middleware
//     } else {
//         res.sendStatus(400); // Ou já responde avisando qe deu errado
//     }
// };

// app.post('/teams', validateTeam, (req, res) => {
//     const team = { id: nextId, ...req.body };
//     teams.push(team);
//     nextId += 1;
//     res.status(201).json(team);
// });

// app.put('/teams/:id', existingId, validateTeam, (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find((t) => t.id === id);
//       const index = teams.indexOf(team);
//       const updated = { id, ...req.body };
//       teams.splice(index, 1, updated);
//       res.status(201).json(updated);
// });

// app.delete('/teams/:id', existingId, (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find((t) => t.id === id);
//     const index = teams.indexOf(team);
//     teams.splice(index, 1);
//     res.sendStatus(200);
// });

// app.use((req, _res, next) => {
//     console.log('req.method:', req.method);
//     console.log('req.path:', req.path);
//     console.log('req.params:', req.params);
//     console.log('req.query:', req.query);
//     console.log('req.headers:', req.headers);
//     console.log('req.body:', req.body);
//     next();
//   });

// app.use((req, res) => res.sendStatus(404));

module.exports = app;
