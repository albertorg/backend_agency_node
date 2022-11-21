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

// ApiZoneSchema.method('toJSON', function () {
//     const { _id, ...object } = this.toObject()
//     return object
// })

module.exports = model('ApiZone', ApiZoneSchema)