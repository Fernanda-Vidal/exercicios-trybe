const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
        next(); // Chama o próximo middleware
    } else {
        res.sendStatus(400); // Ou já responde avisando qe deu errado
    }
};

module.exports = validateTeam;