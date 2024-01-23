const mongoose = require('mongoose')
const { isEmail } = require('validator')

const developerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "The First Name Is Required"]
    }, lastName: {
        type: String,
        required: [true, "The Last Name Is Required"]
    }, email: {
        type: String,
        required: [true, "The Email Name Is Required"],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'Please enter a valid email']
    }, city: {
        type: String,
    }, password: {
        type: String,
        required: [true, "The Password Name Is Required"],
        minlegth: [6, 'Password must be at least 6 characters long']
    },
})

module.exports = mongoose.model('developer', developerSchema)