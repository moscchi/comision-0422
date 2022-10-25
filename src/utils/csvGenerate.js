const jsonCsv = require('json2csv').parse;
const { writeFile } = require('fs/promises')
//import { writeFile } from 'fs/promises'
// Le pasemos 2 parametros a nuestro generador de csv "name":"Leo","lastname":"chiariati","age"
const csvGenerate = async (data, fields, fileName) => {
    const csv = jsonCsv(data, {fields});
    await writeFile(fileName, csv)
    return {message: "Archivo generado con exito."}
}

module.exports = csvGenerate