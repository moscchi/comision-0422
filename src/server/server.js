const express = require('express');
const router = require('../routes/routes');
const routerSession = require('../routes/routesSession');
const session = require('express-session')
const routeError = require('../utils/middlewares/routeError');
const server = express()

server.use(express.json());

server.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))

server.use('/api', routerSession, router)
//server.use('/api', router);
server.use(routeError)

module.exports = server;