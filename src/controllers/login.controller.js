const userModel = require('../models/users.model')
const { compareSync } = require('bcrypt')

const login = async (req,res) => {
    const email = req.body.loginEmail
    const password = req.body.password

    const [emailResult] = await userModel.getUserbyId(email)
    const comparePassword = compareSync(password, emailResult.password)
    if(comparePassword){
        res.send("Login Success!!!")
    }
    else{
        res.send("Incorrect emailId or password")
    }
}

module.exports = { login }
