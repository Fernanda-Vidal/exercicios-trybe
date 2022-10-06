import Joi from 'joi';

const bookSchema = Joi.object({
    id: Joi.number(),
    title: Joi.string().min(5).required(),
    price: Joi.number(),
    autor: Joi.string().min(5).required(),
    isbn: Joi.string().min(8).max(8).required(),
});

export default bookSchema;