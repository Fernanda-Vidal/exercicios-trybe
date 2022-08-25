
 const fieldValidation = (req, res, next) => {
    const blogPost = req.body;
    const requiredFields = ['title', 'description', 'author'];
    const hasProperties = requiredFields.every((property) => property in blogPost);

    if(!hasProperties) {
        return res.status(400).json({ message: 'Faltam atributos' })
    }

    next();
};

module.exports = fieldValidation;