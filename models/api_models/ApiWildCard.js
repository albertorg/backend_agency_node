const { Schema, model } = require('mongoose')

const ApiWildCardSchema = Schema({
    characteristicCode: {
        type: String
    },
    hotelRoomDescription: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    roomCode: {
        type: String
    },
    roomType: {
        type: String
    }

})

ApiWildCardSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiWildCard', ApiWildCardSchema)