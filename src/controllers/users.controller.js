const userModel = require('../models/users.model')
const { encryptPassword } = require('../services/password.encrypt')

const createUser = async (req, res) => {
    try {
        const fullName = req.body.fullName
        const email = req.body.email

        const password = encryptPassword(req.body.password)

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