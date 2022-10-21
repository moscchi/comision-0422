const app = require('./server/server')

app.listen(8080, () => {
  console.log('Servidor escuchando peticiones :)')
})