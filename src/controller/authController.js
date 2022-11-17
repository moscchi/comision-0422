const loginUserService = require("../services/auth/loginUserService");
const registerUserService = require("../services/auth/registerUserService");

const registerUserController = async (req, res) => {
    try {
        const addUser = await registerUserService(req);
        res.status(201).json(addUser)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message})
    }
}
const loginUserController = async (req, res) => {
    try {
        const login = await loginUserService(req);
        res.json(login)
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

module.exports = { registerUserController, loginUserController};