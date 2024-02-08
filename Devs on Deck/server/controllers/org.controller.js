const organization = require('../model/organization.model')
const { HandleErrors } = require('./errorHandler')


module.exports.register = async (req, res) => {
    try {
        const org = await organization.create(req.body)
        res.status(200).json(org)
    } catch (err) {
        const errors = HandleErrors(err)
        res.status(400).json(errors)
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const org = await organization.login(email, password)
        res.json(org)
    } catch (err) {
        const errors = HandleErrors(err)
        res.status(400).json(errors)
    }
}