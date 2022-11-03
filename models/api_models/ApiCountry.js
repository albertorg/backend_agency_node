const { Schema, model } = require('mongoose')
const ApiState = require('./ApiState')

const ApiCountrySchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    isoCode: {
        type: String
    },
    states: {
        type: Schema.Types.ObjectId,
        ref: 'ApiState'
    }

})

module.exports = model('ApiCountry', ApiCountrySchema)