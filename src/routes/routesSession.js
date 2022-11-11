const express = require("express");
const router = express.Router();

router.get('/con-session', (req, res) => {
    if(req.session.contador){
        req.session.contador++;
        res.send(`Visitaste este sitio ${req.session.contador} veces.`)
    } else {
        req.session.contador = 1;
        res.send('Bienvenido :)')
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) {
            res.send('Deslogueado :)')
        } else {
            res.send({status: "Error de deslogueo", body: err})
        }
        
    })
})

router.get('/login', (req, res) => {
    const { username, password } = req.query
    if (username !== 'numen' || password !== 'numen123') {
      return res.send('login failed')
    }
    req.session.user = username
    req.session.admin = true
    res.send('login success!')
   })
   
module.exports = router;