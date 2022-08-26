const { Router } = require('express');
const createdAtValidation = require('../middlewares/createdAtValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const ratingValidation = require('../middlewares/ratingValidation');

const routerActivities = Router();

routerActivities.post('/activities',
    nameValidation,
    priceValidation,
    descriptionValidation,
    createdAtValidation,
    ratingValidation,
    difficultyValidation,
    (req, res) => {

    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = routerActivities;