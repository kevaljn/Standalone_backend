var { query } = require('../services/database')

//creating new email
async function createEmail(email) {
    return await query("INSERT INTO emails (address) values(?)", email);
}

//getting id of the email
async function getId(email) {
    let [result] = await query("SELECT id FROM emails WHERE address LIKE ?", email)
    return (result ? result.id : 0)

}

module.exports = { createEmail, getId }