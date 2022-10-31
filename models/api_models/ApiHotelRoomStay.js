const { Schema, model } = require('mongoose')
const ApiHotelRoomStayFacility = require('./ApiHotelRoomStayFacility')

const ApiHotelRoomStaySchema = Schema({
    description: {
        type: String
    },
    order: {
        type: String,
    },
    roomStayFacilities: [ApiHotelRoomStayFacility],
    stayType: {
        type: String
    }

})

module.exports = model('ApiHotelRoomStay', ApiHotelRoomStaySchema)