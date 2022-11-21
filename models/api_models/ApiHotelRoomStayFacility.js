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

ApiHotelRoomStayFacilitySchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiHotelRoomStayFacility', ApiHotelRoomStayFacilitySchema)