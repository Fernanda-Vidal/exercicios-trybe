const valuesValidation = (req, res, next) => {
    const blogPost = req.body;
    const isValid = Object.values(blogPost).every((value) => value.length >= 5);

    if(!isValid) {
        return res.status(422).json({ message: 'atributos inválidos' });
    }

    next();
};

module.exports = valuesValidation;