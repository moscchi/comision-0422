const UsuarioModel = require('../../models/usuarios.models');

const getUserService = async () => {
    return UsuarioModel.find();
}

module.exports = getUserService