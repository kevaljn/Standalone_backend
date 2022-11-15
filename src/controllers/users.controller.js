const userModel = require('../models/users.model')
const { genSaltSync, hashSync } = require('bcrypt')

const createUser = async (req, res) => {
    try {
        const fullName = req.body.fullName
        const email = req.body.email

        //Password encryption
        const salt = genSaltSync(10)
        const password = hashSync(req.body.password, salt)

        const userRole = req.body.userRole
        const result = await userModel.createUser(fullName, email, password, userRole)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

const getUserbyId = async (req, res) => {
    try {
        const email = req.body.loginEmail
        const result = await userModel.getUserbyId(email)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { createUser, getUserbyId }