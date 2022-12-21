const assocationsModel = require('../models/assocations.model')
const emailModel = require('../models/emails.model')


const getAlldata = async (req, res) => {
    try {
        const result = await assocationsModel.getAlldata()
        for (i = 0; i < result.length; i++) {
            result[i].recipientsEmail = result[i].recipientsEmail.split(',')
        }
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}


const updateMapping = async (req, res) => {
    try {
        let reqData = req.body
        // for deleting
        if (reqData.recipientsEmail.deleted.length != 0) {
            for (i = 0; i < reqData.recipientsEmail.deleted.length; i++) {
                const emailId = await emailModel.getId(reqData.recipientsEmail.deleted[i])
                console.log(req.params.id, emailId)
                const assocationDelete = await assocationsModel.deleteMapping(req.params.id, emailId)
                console.log("Deleted Mapping row count :  " + assocationDelete.affectedRows) // to see if more than one mapping was there or not
            }
        }
    } catch (error) {
        res.send(error)
    }
    try {
        // for inserting
        if (reqData.recipientsEmail.inserted.length != 0) {
            for (i = 0; i < reqData.recipientsEmail.inserted.length; i++) {
                let emailId = await emailModel.getId(reqData.recipientsEmail.inserted[i])
                // console.log(req.params.id, getIdresult[0].id)
                if (!emailId) {
                    var email = await emailModel.createEmail(reqData.recipientsEmail.inserted[i])
                    emailId = email.insertId
                }
                //console.log(emailId)
                const insertMapping = await assocationsModel.createMapping(req.params.id, emailId)
                res.send(insertMapping)
            }
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAlldata, updateMapping }