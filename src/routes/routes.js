const { getEstudiantes, postEstudiantes } = require('../controller/estudiantesController');

const routes = require('express').Router();

routes.get('/estudiantes/:cantidad', getEstudiantes)
routes.post('/estudiantes', postEstudiantes)
module.exports = routes