require('dotenv').config();
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET_KEY

const generateToken = ({ id, name, email }) => {
    const payload = { id, name, email };

    const jwtConfig = {
        expiresIn: '10m',
        algorithm: 'HS256',
    };

    const token = jwt.sign(payload, TOKEN_SECRET, jwtConfig); // função que gera e retorna o token

    return token;
};

const authenticateToken = async (token) => {
    if (!token) {
        const status = 401;
        const message = 'missing token'
        throw { status, message }
    }

    try {
        const validateToken = jwt.verify(token, TOKEN_SECRET)
        return validateToken;
    } catch (e) {
        const status = 401;
        const message = 'JWT malformed'
        console.log('jwt', e)
        throw { status, message, e }
    }
}

module.exports = {
    generateToken,
    authenticateToken,
}