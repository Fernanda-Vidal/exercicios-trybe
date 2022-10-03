const difficultyValidation = (req, res, next) => {
    const { difficulty } = req.body.description;
    const classification = ['Fácil', 'Médio', 'Difícil'];
 
    if(!classification.includes(difficulty)) {
        return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''});
    };

    next();

};

module.exports = difficultyValidation;