const { Schema, model } = require('mongoose')

const ApiGroupZoneSchema = Schema({
    groupZoneCode: {
        type: String
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    zones: [Number]

})

module.exports = model('ApiGroupZone', ApiGroupZoneSchema)