const { Router } = require("express");

const userRouter = Router();

userRouter.post('/signup', (req, res) => {

    res.status(200).json({ token: '' })
}) 

module.exports = userRouter;