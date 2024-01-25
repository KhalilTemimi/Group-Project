const mongoose = require('mongoose')
const { isEmail } = require('validator')
const orgSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: [true, "Organization name is required"]
    }, firstName: {
        type: String,
        required: [true, 'First name is required']
    }
    , lastName: {
        type: String,
        required: [true, 'Last name is Required']
    }
    , email: {
        type: String,
        required: [true, "The Email Name is Required"],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'Please enter a valid email']
    }, org: {
        orgCity: {
            type: String
        }, orgAdress: {
            type: String,
        }, orgState: {
            type: String
        }
    }, password: {
        type: String,
        required: [true, 'The Password is Required'],
        minlegth: [6, 'Password must be at least 6 characters long']
    }, positions: {
        name: {
            type: String
        },
        description: {
            type: String
        },
        skills: {
            type: Array
        }
    }
})

orgSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw new Error('All fields are required')
    }
    const org = await this.findOne({ email: email })
    if (org) {
        if (org.password === password) {
            return org
        }
        throw new Error("The password is incorrect")
    }
    throw new Error("The email is incorrect")

}

module.exports = mongoose.model("organization", orgSchema)