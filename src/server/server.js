const express = require('express');
const authRouter = require('../routes/authRoutes');
const router = require('../routes/routes');
const server = express()

server.use(express.json());
server.use('/api', router);
server.use('/api', authRouter)

module.exports = server;