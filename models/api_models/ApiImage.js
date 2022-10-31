const { Schema, model } = require('mongoose')

const ApiImageSchema = Schema({
    characteristicCode: {
        type: String
    },
    imageTypeCode: {
        type: String,
    },
    order: {
        type: Number
    },
    path: {
        type: String
    },
    roomCode: {
        type: String
    },
    roomType: {
        type: String
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'ApiImageType'
    },
    visualOrder: {
        type: Number
    },
    PMSRoomCode: {
        type: String
    },

})

module.exports = model('ApiImage', ApiImageSchema)