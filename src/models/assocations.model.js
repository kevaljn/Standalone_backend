var {query} = require('../services/database')


//create mapping
async function createMapping(report_id, email_id) {
    return await query("INSERT INTO assocations (reportId,emailId) VALUES (?,?)",[report_id,email_id])
}

// getting all data
async function getAlldata() {
    return await query("SELECT reports.name as Report_Name, group_concat(emails.address) as Email_Addresses FROM reports JOIN assocations ON reports.id = assocations.reportId JOIN emails ON emails.id = assocations.emailId group by reports.id")
}

//delete mapping
async function deleteMapping(report_id, email_id) {
    return await query("DELETE FROM assocations WHERE reportId=? AND emailId=?",[report_id,email_id])
}


module.exports = {getAlldata, createMapping, deleteMapping}