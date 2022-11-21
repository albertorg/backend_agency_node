const { Schema, model } = require('mongoose')

const ApiHotelRoomFacilitySchema = Schema({
    
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
    indFee: {
        type: Boolean
    },
    indLogic: {
        type: Boolean,
    },
    indYesOrNo: {
        type: Boolean,
    },
    number: {
        type: Number,
    },
    order: {
        type: Number,
    },
    voucher: {
        type: Boolean,
    }

})

HotelsSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiHotelRoomFacility', ApiHotelRoomFacilitySchema)