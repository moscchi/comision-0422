const getEstudiantesService = require("../services/getEstudiantesService");

const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await getEstudiantesService(req);
        res.json(estudiantes)
    } catch (error) {
        res.json({message: "ups, algo salio mal"})
    }
}

const postEstudiantes = (req, res) => {

}

module.exports = {getEstudiantes, postEstudiantes}