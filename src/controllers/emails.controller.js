const emailModel = require('../models/emails.model')


const create = async (req, res) => {
    const address = req.body.address
    const result = await emailModel.createEmail(address)
    res.send(result)
};

const getId = async (req,res) => {
    const address = req.body.address
    const result = await emailModel.getId(address)
    res.send(result)
}

module.exports={create, getId}