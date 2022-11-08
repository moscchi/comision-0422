const axios = require('axios')

const getOcupationMiddleware = async (request, response, next) => {
    const { data } = await axios.get('https://www.breakingbadapi.com/api/character/random')
    request.occupation = data[0].occupation
    return next()
}

module.exports = getOcupationMiddleware;