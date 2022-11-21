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

ApiImageSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiImage', ApiImageSchema)