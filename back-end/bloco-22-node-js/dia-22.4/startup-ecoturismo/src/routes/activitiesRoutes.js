const { Router } = require('express');
const createdAtValidation = require('../middlewares/createdAtValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');

const routerActivities = Router();

routerActivities.post('/activities',
    nameValidation,
    priceValidation,
    descriptionValidation,
    createdAtValidation, (req, res) => {

    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = routerActivities;