const { Schema, model } = require('mongoose')

const ApiZoneSchema = Schema({
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    name: {
        type: String
    },
    zoneCode: {
        type: Number
    }

})

module.exports = model('ApiZone', ApiZoneSchema)