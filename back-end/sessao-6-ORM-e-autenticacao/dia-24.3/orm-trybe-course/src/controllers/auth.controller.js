const authService = require('../services/auth.service');

const auth = async (req, res) => {
    const auth = await authService.authenticate(req.body);
    return res.send(auth);
};

module.exports = {
    auth
};