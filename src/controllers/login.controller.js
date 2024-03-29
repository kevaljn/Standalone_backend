const userModel = require('../models/users.model')
const { compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const [emailResult] = await userModel.getUserbyId(email)
        if(!emailResult){
            res.json({
                success: 0,
                message: "User does not exist!"
            })
        }
        const comparePassword = compareSync(password, emailResult.password)

        const jsonToken = sign({ results: emailResult }, "qwe1234", {
            expiresIn: "1hr"
        })
        if (comparePassword) {
            res.json({
                success: 1,
                message: "Login Successfully",
                token: jsonToken,
                user: emailResult
            })
        }
        else {
            res.send({message:"Incorrect password"})
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = { login }
