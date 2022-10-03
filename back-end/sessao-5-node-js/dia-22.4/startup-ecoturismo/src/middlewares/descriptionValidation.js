const descriptionValidation = (descriptionValue, res, value) => {
    if(!descriptionValue) {
        return res.status(400).json( { message: `O campo ${value} é obrigatório` });
    }
}

module.exports = (req, res, next) => {
    const { description } = req.body;

    return descriptionValidation(description, res, 'description')
    || descriptionValidation(description.createdAt, res, 'createdAt')
    || descriptionValidation(description.rating, res, 'rating')
    || descriptionValidation(description.difficulty, res, 'difficulty')
    || next();
};
