const schema = require('../utils/schema');

const courseMiddleware = (req, _res, next) => {
    const { error } = schema.validate(req.body);

    if (error) next(error)
    next()
}

module.exports = courseMiddleware;