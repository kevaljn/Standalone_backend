var { query } = require('../services/database')

// Create new user
async function createUser(fullName, email, password, userRole) {
    return await query("INSERT INTO usersdr(fullName,email,password,user_role) VALUES(?,?,?,?)", [fullName, email, password, userRole],)
}

// Get user by id
// Used in login functionality
async function getUserbyId(email) {
    return await query("SELECT * FROM usersdr WHERE email=?", email)
}

module.exports = { createUser, getUserbyId }