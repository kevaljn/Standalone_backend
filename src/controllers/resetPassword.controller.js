const userModel = require('../models/users.model')
const { sendResetEmail } = require('../services/resetPassword.email')
const { encryptPassword } = require('../services/password.encrypt')

const forgetPassword = async (req, res) => {
    try {
        const email = req.body.emailid

        const [userDetails] = await userModel.getUserbyId(email)

        const userId = userDetails.iD

        const fullName = userDetails.fullName

        sendResetEmail(email, userId, fullName);
        
        res.send("Reset mail sent to your email id.")
    }
    catch (err) {
        res.send("Cannot send email. " + err)
    }
}

const resetPassword = async (req, res) => {

    const userId = req.params.userId
    console.log("We got the id : "+userId)

    // const password = encryptPassword(req.body.password)

    // const changepassword = await userModel.updatePassword(userId, password)

    res.send("password changed")
}

module.exports = { resetPassword, forgetPassword }