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

module.exports = model('ApiWildCard', ApiWildCardSchema)