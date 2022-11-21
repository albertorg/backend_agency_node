const { Schema, model } = require('mongoose')

const ApiHotelTerminalSchema = Schema({
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    distance: {
        type: Number
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    terminalCode: {
        type: String
    },
    terminalType: {
        type: String,
    }

})

ApiHotelTerminalSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiHotelTerminal', ApiHotelTerminalSchema)