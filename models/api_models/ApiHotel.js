const { Schema, model } = require('mongoose')
// const ApiHotelFacility = require('./ApiHotelFacility')
// const ApiHotelIssue = require('./ApiHotelIssue')
// const ApiHotelPhone = require('./ApiHotelPhone')
// const ApiHotelPointOfInterest = require('./ApiHotelPointOfInterest')
// const ApiHotelRoom = require('./ApiHotelRoom')
// const ApiBoard = require('./ApiBoard')
// const ApiHotelTerminal = require('./ApiHotelTerminal')
// const ApiImage = require('./ApiImage')
// const ApiSegment = require('./ApiSegment')
// const ApiWildCard = require('./ApiWildCard')

const ApiHotelSchema = Schema({
    S2C: {
        type: String
    },
    accommodationType: {
        type: Schema.Types.ObjectId,
        ref: 'ApiAccommodation'
    },
    accommodationTypeCode: {
        type: String
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    boardCodes: [String],
    boards: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiBoard'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ApiCategory'
    },
    categoryCode: {
        type: String
    },
    categoryGroup: {
        type: Schema.Types.ObjectId,
        ref: 'ApiGroupCategory'
    },
    categoryGroupCode: {
        type: String
    },
    chain: {
        type: Schema.Types.ObjectId,
        ref: 'ApiChain'
    },
    chainCode: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    code: {
        type: Number
    },
    coordinates: {
        type: Schema.Types.ObjectId,
        ref: 'ApiGeoLocation'
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'ApiCountry'
    },
    countryCode: {
        type: String
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'ApiDestination'
    },
    destinationCode: {
        type: String
    },
    email: {
        type: String
    },
    exclusiveDeal: {
        type: Number
    },
    facilities: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelFacility'
    },
    giataCode: {
        type: String
    },
    images: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiImage'
    },
    interestPoints: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelPointOfInterest'
    },
    issues: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelIssue'
    },
    lastUpdate: {
        type: String
    },
    license: {
        type: String
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    phones: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelPhone'
    },
    postalCode: {
        type: String
    },
    ranking: {
        type: Number
    },
    rooms: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelRoom'
    },
    segmentCodes: [Number],
    segments: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiSegment'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'ApiState'
    },
    stateCode: {
        type: String
    },
    terminals: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiHotelTerminal'
    },
    web: {
        type: String
    },
    Wildcards: {
        type: [Schema.Types.ObjectId],
        ref: 'ApiWildCard'
    },
    zone: {
        type: Schema.Types.ObjectId,
        ref: 'ApiZone'
    },
    zoneCode: {
        type: Number
    }

})

module.exports = model('ApiHotel', ApiHotelSchema)