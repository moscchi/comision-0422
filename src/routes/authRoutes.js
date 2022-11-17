const express = require("express");
const {registerUserController, loginUserController} = require("../controller/authController");
const authRouter = express.Router();

authRouter.post('/login', loginUserController);
authRouter.post('/register', registerUserController);

module.exports = authRouter;
