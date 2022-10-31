const { Schema, model } = require('mongoose')

const ApiContentSchema = Schema({
    content: {
        type: String,
    },
    languageCode: {
        type: String,
    }
})

module.exports = model('ApiContent', ApiContentSchema)