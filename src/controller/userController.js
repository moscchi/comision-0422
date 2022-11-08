const addUserService = require("../services/users/addUserService");
const deleteUserService = require("../services/users/deleteUserService");
const getUserByUsernameService = require("../services/users/getUserByUsernameService");
const getUserService = require("../services/users/getUserService");
const updateUserService = require("../services/users/updateUserService");

const getUserController = async (req, res) => {
    try {
        
        const users = await getUserService();
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const getUserByUsernameController = async (req, res) => {
    try {
        console.log('**ENTRE AL CONTROLLER**');
        const users = await getUserByUsernameService(req);
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const addUserController = async (req, res) => {
    try {
        console.log('En controller ', req.occupation);
        const addUser = await addUserService(req)
        res.status(201).json({message: `Creado el usuario ${addUser.username}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const updateUserController = async (req, res) => {
    try {
        const updateUser = await updateUserService(req);
        res.status(200).json({message: `Modificado el usuario ${updateUser}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const deleteUserController = async (req, res) => {
    try {
        const delUser = await deleteUserService(req);
        res.json({message: `Usuario ${delUser} eliminado con exito`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

module.exports = { getUserController, addUserController, getUserByUsernameController, deleteUserController,updateUserController }