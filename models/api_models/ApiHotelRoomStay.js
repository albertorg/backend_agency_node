const { Schema, model } = require('mongoose')
const ApiHotelRoomStayFacility = require('./ApiHotelRoomStayFacility')


const ApiHotelRoomStaySchema = Schema({
    description: {
        type: String
    },
    order: {
        type: String,
    },
    roomStayFacilities: [ApiHotelRoomStayFacility.schema],
    stayType: {
        type: String
    }

})

module.exports = model('ApiHotelRoomStay', ApiHotelRoomStaySchema)