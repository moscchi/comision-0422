const express = require('express');
const { addSocioController } = require('../controllers/socioController');
const router = express.Router()

router.post('/socio', addSocioController);

module.exports = router;