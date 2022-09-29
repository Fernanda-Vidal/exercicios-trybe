const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    description: Joi.string().min(5).max(100),
    active: Joi.boolean().required(),
    duration: Joi.number().required(),
    modules: Joi.array().items(
        Joi.object(
        { name: Joi.string().min(3).max(30),
        description: Joi.string().min(5).max(100),
        duration: Joi.number(),
        qtdBlock: Joi.number()
    }))
})

module.exports = schema;