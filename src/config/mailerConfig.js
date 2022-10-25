const { createTransport } = require("nodemailer");

let transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
        user: "num3nclases_test123@outlook.com", // generated ethereal user
        pass: "numen123", // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
})

module.exports = transporter;
/* let transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    
    auth: {
      user: "mymail@outlook.com", // generated ethereal user
      pass: "mypassword", // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
  }); */