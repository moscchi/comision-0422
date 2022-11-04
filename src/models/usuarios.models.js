const { model, Schema } =require('mongoose')

const UsuarioSchema = new Schema({
    username: {
        type: String,
        required: [true, "El nombre de usuario es requerido."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    created_at: {type: Date, default: new Date()}
})

const UsuarioModel = model("Usuario", UsuarioSchema);

module.exports = UsuarioModel;