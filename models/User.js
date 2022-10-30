const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }

    // Here add address, date, and other user info
})

module.exports = model('User', UserSchema)