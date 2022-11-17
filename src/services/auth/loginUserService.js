const bcrypt = require("bcryptjs");
const UsuarioModel = require("../../models/usuarios.models");
const { generarJWT } = require("../../utils/generarJWT");

const loginUserService = async (req) => {
  const { username, password } = req.body;

  const user = await UsuarioModel.findOne({ username });
  if (!user) return { message: "Usuario o contraseña inválidos." };
  const validatePassword = bcrypt.compareSync(password, user.password);
  if (!validatePassword) return { message: "Usuario o contraseña inválidos." };
  const token = generarJWT(username);
  return token;
};

module.exports = loginUserService;
