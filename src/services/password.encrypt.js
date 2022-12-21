const { genSaltSync, hashSync } = require("bcrypt")

const encryptPassword = (password) => {
    const salt = genSaltSync(10)
    const encryptPassword = hashSync(password, salt)
    return encryptPassword
}

module.exports = { encryptPassword }
