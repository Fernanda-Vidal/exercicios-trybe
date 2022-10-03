const { authenticateToken } = require("../utils/JWT");

const authMiddleware = async (req, _res, next) => {
    const { token } = req.headers;

    try {
        const user = await authenticateToken(token);

        req.user = user;
        next();
    } catch (err) {
        next(err)
    }

};

module.exports = authMiddleware;