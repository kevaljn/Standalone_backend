const userModel = require('../models/users.model')
const { genSaltSync, hashSync } = require('bcrypt')

const createUser = async (req, res) => {
    const fullName = req.body.fullName
    const email = req.body.email

    //Password encryption
    const salt = genSaltSync(10)
    const password = hashSync(req.body.password, salt)

    const userRole = req.body.userRole
    const result = await userModel.createUser(fullName, email, password, userRole)
    res.send(result)
}

const getUserbyId = async (req, res) => {
    const email = req.body.loginEmail
    const result = await userModel.getUserbyId(email)
    res.send(result)
}

module.exports = { createUser, getUserbyId }