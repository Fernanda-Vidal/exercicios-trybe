const createdAtValidation = (req, res, next) => {
    const { description } = req.body;

    // Regex pesquisado em https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
    const isDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

    if (!isDate.test(description.createdAt)) {
        return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\' '})
    };

    next();
};

module.exports = createdAtValidation;