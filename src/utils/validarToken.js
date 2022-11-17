const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuarios.models');
const validarToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) res.status(401).json({message: "Token no encontrado."})
 
    try {
        const {username} = jwt.verify(token, process.env.SECRET_KEY)
        const user = await UsuarioModel.findOne({username})
 
        if(!user) res.status(401).json({message: "Token inválido."})
 
        req.user = user
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Token inválido."})
    }}

    module.exports = validarToken;