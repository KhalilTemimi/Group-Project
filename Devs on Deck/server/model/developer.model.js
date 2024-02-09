const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "The First Name Is Required"]
    },
    lastName: {
        type: String,
        required: [true, "The Last Name Is Required"]
    },
    email: {
        type: String,
        required: [true, "The Email Name Is Required"],
        unique: true,
        lowercase: true,
    },
    city: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "The Password Name Is Required"],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    skills: {
        type: Array
    }
})

developerSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error('All fields are required')
    }
    const dev = await this.findOne({ email: email })
    if (dev) {
        if (dev.password === password) {
            return dev
        }
        throw new Error("The password is incorrect")
    }
    throw new Error("The email is incorrect")
}

const containArray = (skills, resSkills) => {
    skills = skills.map(skill => String(skill).toUpperCase());
    resSkills = resSkills.map(skill => String(skill).toUpperCase());
    return resSkills.some(skill => skills.includes(skill));
}

developerSchema.statics.getDev = async function (skills) {

    const resultArray = await this.find()
    const filteredArr = resultArray.filter(res => {
        return containArray(skills, res.skills)
    })
    if (filteredArr.length > 0) return filteredArr

}
module.exports = mongoose.model('developer', developerSchema)