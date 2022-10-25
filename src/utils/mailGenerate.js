const transporter = require('../config/mailerConfig');

const mailGenerator = async (fileName) => {
    let info = await transporter.sendMail({
        from: "num3nclases_test123@outlook.com",
        to: "polochariatti@gmail.com",
        subject: "Nuevo socio de gym",
        text: "Hemos añadido un nuevo socio, pronto seremos millonarios",
        html: "<b>Hemos añadido un nuevo socio, pronto seremos millonarios<b/>",
        attachments: [
            {
                path: fileName
            }
        ]
    })
    console.log("Message sent: %s", info.messageId);
    

}

module.exports = mailGenerator