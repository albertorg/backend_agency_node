const { Schema, model } = require('mongoose')

const ApiHotelRoomStayFacilitySchema = Schema({

    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    facilityCode: {
        type: Number
    },
    facilityGroupCode: {
        type: Number
    },
    number: {
        type: Number,
    }

})

module.exports = model('ApiHotelRoomStayFacility', ApiHotelRoomStayFacilitySchema)