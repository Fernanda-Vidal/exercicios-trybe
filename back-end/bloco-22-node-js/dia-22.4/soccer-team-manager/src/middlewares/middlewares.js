const teams = require('../files/teams');

const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
        next(); // Chama o próximo middleware
    } else {
        res.sendStatus(400); // Ou já responde avisando qe deu errado
    }
};

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (teams.some((t) => t.id === id)) {
        next();
    } else {
        res.sendStatus(404);
    }
};

module.exports = {
    validateTeam,
    existingId,
};