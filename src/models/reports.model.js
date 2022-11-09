var {query} = require('../services/database')

//creating new report
async function createReport(report_name) {
    return await query("INSERT INTO reports SET ?",report_name);
}

module.exports = { createReport }