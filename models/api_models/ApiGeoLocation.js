const { Schema, model } = require('mongoose')

const ApiGeoLocationSchema = Schema({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }

})

module.exports = model('ApiGeoLocation', ApiGeoLocationSchema)