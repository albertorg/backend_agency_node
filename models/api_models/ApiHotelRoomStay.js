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

ApiHotelRoomStaySchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiHotelRoomStay', ApiHotelRoomStaySchema)