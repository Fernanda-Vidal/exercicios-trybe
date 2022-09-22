const { errorGenerate } = require('../utils/errorGenerate');
const schema = require('../utils/schema');

const courseMiddleware = (req, _res, next) => {
    const { 
        name,
        description,
        active,
        duration,
        modules } = req.body;
        
        
    if (!name ||
        !description ||
        active === null ||
        !duration) next(errorGenerate(400, 'something course is missing', 'BODY_COURSE_IS_REQUIRED'))
            
        if (modules) {
            modules.map(({ name, duration, qtdBlock }) => {
                if ( !name || !duration || !qtdBlock) next(errorGenerate(400, 'something is missing', 'BODY_MODULES_IS_REQUIRED'))
            })
        }

    const { error } = schema.validate(req.body);

    if (error) next(error)
    next()
}

module.exports = courseMiddleware;