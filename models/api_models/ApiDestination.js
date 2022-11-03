const { Schema, model } = require('mongoose')

const ApiContentSchema = Schema({
    content: {
        type: String,
    },
    languageCode: {
        type: String,
    }
})

const ApiGroupZoneSchema = Schema({
    groupZoneCode: {
        type: String
    },
    name: ApiContentSchema,
    zones: [Number]

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

module.exports = model('ApiDestination', ApiDestinationSchema)