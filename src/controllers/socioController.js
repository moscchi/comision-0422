const addSocioService = require("../services/addSocioService");

const addSocioController = async (req, res) => {
    const socioResponse = await addSocioService(req);
    res.status(201).json(socioResponse);
}

module.exports = {addSocioController}