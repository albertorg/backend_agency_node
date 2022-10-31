const { Schema, model } = require('mongoose')

const ApiHotelPointOfInterestSchema = Schema({
    distance: {
        type: String
    },
    facilityCode: {
        type: Number,
    },
    facilityGroupCode: {
        type: Number
    },
    fee: {
        type: Boolean
    },
    order: {
        type: Number
    },
    poiName: {
        type: String
    }

})

module.exports = model('ApiHotelPointOfInterest', ApiHotelPointOfInterestSchema)