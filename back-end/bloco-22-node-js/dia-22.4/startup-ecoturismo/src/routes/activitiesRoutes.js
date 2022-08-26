const { Router } = require('express');
const nameValidation = require('../middlewares/nameValidation');

const routerActivities = Router();

routerActivities.post('/activities', nameValidation, (req, res) => {

    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = routerActivities;