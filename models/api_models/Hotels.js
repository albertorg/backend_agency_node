const { Schema, model } = require('mongoose') 


const ApiContentSchema = Schema({
    content: {
        type: String,
    },
    languageCode: {
        type: String,
    }
})

const ApiGeoLocationSchema = Schema({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }

})

const ApiHotelPhoneSchema = Schema({
    phoneNumber: {
        type: String
    },
    phoneType: {
        type: String,
    }
})

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

const ApiHotelRoomFacilitySchema = Schema({

    description: ApiContentSchema,
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

const ApiHotelRoomStayFacilitySchema = Schema({

    description: ApiContentSchema,
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

const ApiImageTypeSchema = Schema({
    code: {
        type: String,
    },
    description: ApiContentSchema,

})

const ApiZoneSchema = Schema({
    description: ApiContentSchema,
    name: {
        type: String
    },
    zoneCode: {
        type: Number
    }

})

const ApiStateSchema = Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
    }

})

const ApiWildCardSchema = Schema({
    characteristicCode: {
        type: String
    },
    hotelRoomDescription: ApiContentSchema,
    roomCode: {
        type: String
    },
    roomType: {
        type: String
    }

})

const ApiSegmentSchema = Schema({
    code: {
        type: Number,
    },
    description: ApiContentSchema

})

const ApiImageSchema = Schema({
    characteristicCode: {
        type: String
    },
    imageTypeCode: {
        type: String,
    },
    order: {
        type: Number
    },
    path: {
        type: String
    },
    roomCode: {
        type: String
    },
    roomType: {
        type: String
    },
    type: ApiImageTypeSchema,
    visualOrder: {
        type: Number
    },
    PMSRoomCode: {
        type: String
    },

})

const ApiHotelTerminalSchema = Schema({
    description: ApiContentSchema,
    distance: {
        type: Number
    },
    name: ApiContentSchema,
    terminalCode: {
        type: String
    },
    terminalType: {
        type: String,
    }

})

const ApiHotelRoomStaySchema = Schema({
    description: {
        type: String
    },
    order: {
        type: String,
    },
    roomStayFacilities: [ApiHotelRoomStayFacilitySchema],
    stayType: {
        type: String
    }

})

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
    roomFacilities: [ApiHotelRoomFacilitySchema],
    roomStays: [ApiHotelRoomStaySchema],
    roomType: {
        type: String
    }

})

const ApiHotelIssueSchema = Schema({
    alternative: {
        type: Boolean
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String,
    },
    description: ApiContentSchema,
    issueCode: {
        type: String
    },
    issueType: {
        type: String
    },
    order: {
        type: Number
    }

})

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
    description: ApiContentSchema,
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

const ApiGroupCategorySchema = Schema({
    code: {
        type: String,
    },
    description: ApiContentSchema,
    name: ApiContentSchema,
    order: {
        type: Number
    }

})

const ApiGroupZoneSchema = Schema({
    groupZoneCode: {
        type: String
    },
    name: ApiContentSchema,
    zones: [Number]

})

const ApiDestinationSchema = Schema({
    code: {
        type: String,
    },
    countryCode: {
        type: String,
    },
    groupZones: [ApiGroupZoneSchema],
    isoCode: {
        type: String
    },
    name: ApiContentSchema,
    zones: [ApiZoneSchema]

})

const ApiCountrySchema = Schema({
    code: {
        type: String,
    },
    description: ApiContentSchema,
    isoCode: {
        type: String
    },
    states: ApiStateSchema

})

const ApiChainSchema = Schema({
    code: {
        type: String,
    },
    description: ApiContentSchema

})

const ApiCategorySchema = Schema({
    accommodationType: {
        type: String
    },
    code: {
        type: String,
    },
    description: ApiContentSchema,
    group: {
        type: String
    },
    simpleCode: {
        type: Number
    }

})

const ApiBoardSchema = Schema({
    code: {
        type: String,
    },
    description: ApiContentSchema,
    multiLingualCode: {
        type: String
    }

})

const ApiAccommodationSchema = Schema({
    code: {
        type: String,
    },
    typeDescription: {
        type: Array,
    },
    typeMultiDescription: ApiContentSchema

})

const HotelsSchema = Schema({
    S2C: {
        type: String
    },
    accommodationType: ApiAccommodationSchema,
    accommodationTypeCode: {
        type: String
    },
    address: ApiContentSchema,
    boardCodes: [String],
    boards: [ApiBoardSchema],
    category: ApiCategorySchema,
    categoryCode: {
        type: String
    },
    categoryGroup: ApiGroupCategorySchema,
    categoryGroupCode: {
        type: String
    },
    chain: ApiChainSchema,
    chainCode: {
        type: String
    },
    city: ApiContentSchema,
    code: {
        type: Number
    },
    coordinates: ApiGeoLocationSchema,
    country: ApiCountrySchema,
    countryCode: {
        type: String
    },
    description: ApiContentSchema,
    destination: ApiDestinationSchema,
    destinationCode: {
        type: String
    },
    email: {
        type: String
    },
    exclusiveDeal: {
        type: Number
    },
    facilities: [ApiHotelFacilitySchema],
    giataCode: {
        type: String
    },
    images: [ApiImageSchema],
    interestPoints: [ApiHotelPointOfInterestSchema],
    issues: [ApiHotelIssueSchema],
    lastUpdate: {
        type: String
    },
    license: {
        type: String
    },
    name: ApiContentSchema,
    phones: [ApiHotelPhoneSchema],
    postalCode: {
        type: String
    },
    ranking: {
        type: Number
    },
    rooms: [ApiHotelRoomSchema],
    segmentCodes: [Number],
    segments: [ApiSegmentSchema],
    state: ApiStateSchema,
    stateCode: {
        type: String
    },
    terminals: [ApiHotelTerminalSchema],
    web: {
        type: String
    },
    Wildcards: [ApiWildCardSchema],
    zone: ApiZoneSchema,
    zoneCode: {
        type: Number
    }

}, { timestamps: true })


// HotelsSchema.method('toJSON', function() {
//     const { _id, ...object} = this.toObject()
//     return object
// })

// const HotelsSchema = Schema({

//     hotels: [ApiHotelSchema]

// }, { timestamps: true })


module.exports = model('Hotels', HotelsSchema)