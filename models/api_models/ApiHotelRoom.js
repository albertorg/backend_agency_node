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
    roomFacilities: [ApiHotelRoomFacility.schema],
    roomStays: [ApiHotelRoomStay.schema],
    roomType: {
        type: String
    }

})

module.exports = model('ApiHotelRoom', ApiHotelRoomSchema)