const developer = require('../model/developer.model')
const { HandleErrors } = require('./errorHandler')

module.exports.register = async (req, res) => {

    try {
        const dev = await developer.create(req.body)
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
        res.status(400).json(errors)
<<<<<<< HEAD
=======
    }
}

module.exports.addSkillsBio = async (req, res) => {
    const { skills, bio } = req.body
    const { id } = req.params
    try {
        const newDev = await developer.findOneAndUpdate({ _id: id }, { skills: skills },
                                        {bio: bio}, { new: true, runValidators: true })
        res.status(200).json(newDev)
    } catch (err) {
        res.status(400).json("An Error Occured")
        console.log("first")
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
    }
}

module.exports.addSkills = async (req, res) => {
<<<<<<< HEAD
    const { skills, bio } = req.body
    const { id } = req.params
    try {
        const newDev = await developer.findOneAndUpdate({ _id: id }, { skills: skills, bio: bio },
            { new: true, runValidators: true })
=======
    const { skills} = req.body
    const { id } = req.params
    try {
        const newDev = await developer.findOneAndUpdate({ _id: id }, { skills: skills },
                                        { new: true, runValidators: true })
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
        res.status(200).json(newDev)
    } catch (err) {
        res.status(400).json("An Error Occured")
    }
}


// find developers that matches the job required skills

module.exports.findDev = async (req, res) => {
    const { skills } = req.body
    try {
        const dev = await developer.getDev(skills)
        res.status(200).json(dev)
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: "Developer Not Found" })
    }

}

<<<<<<< HEAD

//get all devs 

module.exports.getAllDevs = async (req, res) => {

    try {
        const devs = await developer.find()
        res.status(200).json(devs)
    } catch (err) {
        res.status(400).json(err)
    }

}


//get dev by id

module.exports.getOneDev = async (req, res) => {
    const { id } = req.params
    try {
        const dev = await developer.findById({ _id: id })
        res.status(200).json(dev)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
=======
// get all developers
module.exports.getAllDevelopers = (req, res) => {
    developer.find({})
        .then(Developers => {
            console.log(Developers);
            res.json(Developers);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
}