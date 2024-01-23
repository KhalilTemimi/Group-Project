const organization = require('../model/organization.model')
const { HandleErrors } = require('./errorHandler')
module.exports.register = async (req, res) => {
    console.log(req)
    try {
        const org = await organization.create(req.body)
        res.status(200).json(org)
    } catch (err) {
        const errors = HandleErrors(err)
        res.json(errors)
    }
}