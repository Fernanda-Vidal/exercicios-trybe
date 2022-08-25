// Middleware de erro recebe obrigatoriamente 4 parâmetros.
// Qualquer middleware que tiver 4 params é um middleware de erro .
const errorMiddleware = (err, req, res, next) => {
    const { statusCode, message } = error;
    return res.status(statusCode || 500).json({ message });
};

module.exports = errorMiddleware;