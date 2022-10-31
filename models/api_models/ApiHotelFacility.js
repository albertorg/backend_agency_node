const { Schema, model } = require('mongoose')

const ApiHotelFacilitySchema = Schema({
    ageFrom: {
        type: Number
    },
    ageTo: {
        type: Number,
    },
    amount: {
        type: Number
    },
    applicationType: {
        type: String
    },
    currency: {
        type: String
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    distance: {
        type: Number
    },
    facilityCode: {
        type: Number
    },
    facilityGroupCode: {
        type: Number
    },
    facilityName: {
        type: String
    },
    indFee: {
        type: Boolean
    },
    indLogic: {
        type: Boolean
    },
    indYesOrNo: {
        type: Boolean
    },
    number: {
        type: Number
    },
    order: {
        type: Number
    },
    timeFrom: {
        type: String
    },
    timeTo: {
        type: String
    },
    voucher: {
        type: Boolean
    }

})

module.exports = model('ApiHotelFacility', ApiHotelFacilitySchema)