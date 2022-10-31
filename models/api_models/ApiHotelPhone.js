const { Schema, model } = require('mongoose')

const ApiHotelPhoneSchema = Schema({
    phoneNumber: {
        type: String
    },
    phoneType: {
        type: String,
    }
})

module.exports = model('ApiHotelPhone', ApiHotelPhoneSchema)