const { Schema, model } = require('mongoose')

const ApiImageTypeSchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },

})

module.exports = model('ApiImageType', ApiImageTypeSchema)