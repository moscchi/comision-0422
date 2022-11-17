const jwt = require('jsonwebtoken')
require('dotenv').config();

const generarJWT = (username) => {
   const payload = { username };
   return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4h'})
}

module.exports = { generarJWT }