var mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function query(query, params) {
    const [result] = await pool.query(query, params).catch((err) => console.log(err))
    return result
}

module.exports = { query }