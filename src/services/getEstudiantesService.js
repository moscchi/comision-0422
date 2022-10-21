const axios = require('axios')


const getEstudiantesService = async (req) => {
    const { cantidad } = req.params;
    const cantidadParsed = Number(cantidad);
    const arrayOfPeople = []
    
    for(let i = 0; i < cantidadParsed; i++){
        const people = await axios.get('https://randomuser.me/api/')
        const {first, last} = people.data.results[0].name;
        arrayOfPeople.push({first, last});
    }
    return arrayOfPeople;
}

module.exports = getEstudiantesService