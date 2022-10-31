const { Schema, model } = require('mongoose')

const ApiAccommodationSchema = Schema({
    code: {
        type: String,
    },
    typeDescription: {
        type: Array,
    },
    typeMultiDescription: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    }

    
})

module.exports = model('ApiAccommodation', ApiAccommodationSchema)