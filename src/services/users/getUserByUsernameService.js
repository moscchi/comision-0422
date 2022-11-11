const UsuarioModel = require('../../models/usuarios.models');

const getUserByUsernameService = async (req) => {
    const { username } = req.params;
    const user = await UsuarioModel.findOne({username: username});
    console.log(user);
    if(!user) throw new Error(`Usuario ${username} no encontrado`, { cause: 404 }) 
    return user

    // Falsy o Falseey: ¿0? null undefined NaN 

}

module.exports = getUserByUsernameService