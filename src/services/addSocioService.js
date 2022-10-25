const csvGenerate = require('../utils/csvGenerate');
const mailGenerator = require('../utils/mailGenerate');

const addSocioService = async (req) => {
    const { name, lastName, age, email } = req.body;
    const date = new Date()
    const dateNow = {year: date.getFullYear(), month: date.getMonth(), day: date.getDay()}
    // Supuestamente guardariamos a una base de datos.
    const responseSocio = {
        name, age, email, date: `${dateNow.day}-${dateNow.month}-${dateNow.year}`, lastName
    }
    const fields = ["name", "lastName", "age", "email", "date"]
    const fileName = `./socio-${name}-${lastName}.csv`
    await csvGenerate(responseSocio, fields, fileName)
    await mailGenerator(fileName);
    return responseSocio;
}

module.exports = addSocioService;