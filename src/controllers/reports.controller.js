const reportModel = require('../models/reports.model')

const createReport = async (req,res) => {
    const report_name = req.body.report_name
    const result = await reportModel.createReport(report_name)
    res.send(result)
}

module.exports = { createReport }