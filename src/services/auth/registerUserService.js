const UsuarioModel = require('../../models/usuarios.models')
const bcrypt = require('bcryptjs')
const registerUserService = async (req) => {
    const { username, password, repeatPassword } = req.body;
    if(password !== repeatPassword) {
        throw new Error("Las contraseñas deben ser iguales.");
    }
    /*
    Opcional, porque la BBDD ya tiene unique: true en username por lo que no permite
    por defecto duplicados.
    */
    const user = await UsuarioModel.findOne({username});
    if(user) {
        throw new Error("El usuario ya existe");
    }
    
    const encodedPassword = bcrypt.hashSync(password);
    const newUser = new UsuarioModel({username, password: encodedPassword});
    newUser.save();
    return {username}
}

module.exports = registerUserService;