const UsuarioModel = require('../../models/usuarios.models');

const updateUserService = async (req) => {
    const { username } = req.params;
    const user = req.body;
    const updateUser = await UsuarioModel.findOne({ username })
    updateUser.username = user.username;
    updateUser.password = user.password;
    await updateUser.save();
    return updateUser.username;
}

module.exports = updateUserService;