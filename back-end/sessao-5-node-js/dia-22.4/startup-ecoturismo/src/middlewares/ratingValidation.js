const ratingValidation = (req, res, next) => {
    const { rating } = req.body.description;
    const isInteger = Number.isInteger(rating)

    if(!(isInteger && rating >= 1 && rating <= 5)) {
        return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5'});
    };

    next();

};

module.exports = ratingValidation;