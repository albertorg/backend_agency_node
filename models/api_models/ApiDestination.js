const { Schema, model } = require('mongoose')
const ApiGroupZone = require('./ApiGroupZone')
const ApiZone = require('./ApiZone')

const ApiDestinationSchema = Schema({
    code: {
        type: String,
    },
    countryCode: {
        type: String,
    },
    groupZones: [ApiGroupZone],
    isoCode: {
        type: String
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    zones: [ApiZone]

})

module.exports = model('ApiDestination', ApiDestinationSchema)