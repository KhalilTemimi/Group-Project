const developer = require('../model/developer.model')
const { HandleErrors } = require('./errorHandler')

module.exports.register = async (req, res) => {

    try {
        const dev = await developer.create(req.body)
        console.log(dev)
        res.status(200).json(dev)
    } catch (err) {
        const errors = HandleErrors(err)
        res.status(400).json(errors)
    }
}


module.exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const dev = await developer.login(email, password)
        res.json(dev)
    } catch (err) {
        const errors = HandleErrors(err)
        res.json(errors)
    }
}

module.exports.addSkills = async (req, res) => {
    const { skills } = req.body
    const { id } = req.params
    try {
        const newDev = await developer.findOneAndUpdate({ _id: id }, { skills: skills }, { new: true, runValidators: true })
        res.status(200).json(newDev)
    } catch (err) {
        res.status(400).json("An Error Occured")
        console.log("first")
    }
}


// find developers that matches the job required skills

module.exports.findDev = async (req, res) => {
    const { skills } = req.body
    try {
        const dev = await developer.getDev(skills)
        res.json(dev)
    } catch (err) {
        res.json({ error: "Developer Not Found" })
    }

}