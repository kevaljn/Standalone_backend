const userModel = require('../models/users.model')
const { compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const email = req.body.loginEmail
        const password = req.body.password

        const [emailResult] = await userModel.getUserbyId(email)
        const comparePassword = compareSync(password, emailResult.password)

        const jsonToken = sign({ results: emailResult }, "qwe1234", {
            expiresIn: "1hr"
        })
        if (comparePassword) {
            res.json({
                success: 1,
                message: "Login Successfully",
                token: jsonToken
            })
        }
        else {
            res.send("Incorrect emailId or password")
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = { login }
