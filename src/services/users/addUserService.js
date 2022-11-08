const UsuarioModel = require('../../models/usuarios.models')


const addUserService = async (req) => {
    const user = req.body;
    user.occupation = req.occupation
    const newUser = new UsuarioModel(user);
    await newUser.save();
    return user;
}

module.exports = addUserService;