const developer = require('../model/developer.model')


const HandleErrors = (err) => {

    let errors = { email: "", password: "", fields: "" }

    if (err.message === "All fields must be filled") {
        errors.fields = err.message
    }
    //already existing email (in registering)
    if (err.code === 11000) {
        errors.email = "That email is already registered"
    }

    // incorrect email 
    if (err.message === "The email is incorrect") {
        errors.email = err.message

    }

    // incorrect password 
    if (err.message === "The password is incorrect") {
        errors.password = err.message
    }

    if (err.message.includes('developer validation failed')) {
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.properties.message
        })
    }
    return errors
}

module.exports.register = async (req, res) => {
    try {
        const dev = await developer.create(req.body)
        res.status(200).json(dev)
    } catch (err) {
        const errors = HandleErrors(err)
        console.log(err.message)
        res.json(errors)
    }
}