const { Schema, model } = require('mongoose')

const ApiSegmentSchema = Schema({
    code: {
        type: Number,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    }

})

module.exports = model('ApiSegment', ApiSegmentSchema)