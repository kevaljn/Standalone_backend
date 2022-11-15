const emailModel = require('../models/emails.model')


const create = async (req, res) => {
    try {
        const address = req.body.address
        const result = await emailModel.createEmail(address)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
};

const getId = async (req, res) => {
    try {
        const address = req.body.address
        const result = await emailModel.getId(address)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { create, getId }