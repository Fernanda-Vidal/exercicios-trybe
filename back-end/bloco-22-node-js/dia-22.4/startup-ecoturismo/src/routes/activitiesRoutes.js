const { Router } = require('express');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');

const routerActivities = Router();

routerActivities.post('/activities', nameValidation, priceValidation, (req, res) => {

    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = routerActivities;