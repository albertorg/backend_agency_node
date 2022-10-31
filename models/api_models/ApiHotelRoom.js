const { Schema, model } = require('mongoose')
const ApiHotelRoomFacility = require('./ApiHotelRoomFacility')
const ApiHotelRoomStay = require('./ApiHotelRoomStay')

const ApiHotelRoomSchema = Schema({
    characteristicCode: {
        type: String
    },
    description: {
        type: String,
    },
    roomCode: {
        type: String
    },
    roomFacilities: [ApiHotelRoomFacility],
    roomStays: [ApiHotelRoomStay],
    roomType: {
        type: String
    }

})

module.exports = model('ApiHotelRoom', ApiHotelRoomSchema)