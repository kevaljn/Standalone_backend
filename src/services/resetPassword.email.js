var nodemailer = require('nodemailer')

const { sign } = require('jsonwebtoken')

const sendResetEmail = (emailId, userId, fullName) => {

    const jsonToken = sign({ results: emailId }, "qwe1234", {
        expiresIn: "20min"
    })

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASSWORD
        }
    })
    var mailOptions = {
        from: "keval2503jn@gmail.com",
        to: `${emailId}`,
        subject: "Reset Password",
        html:
            `<h3>Hello ${fullName},</h3>
        <p>We heard you want to change your password.</p>
        <p>Please <a href ="http://localhost:4200/reset-password/${userId}/${jsonToken}">click here</a> to visit the reset page.</p>
        <p>*<i>The above link is valid till 20 minutes</i>*</p>`
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(typeof(jsonToken))
            console.log("Mail sent successfully", info.response)
        }
    })
}

module.exports = { sendResetEmail }