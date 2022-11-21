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

ApiSegmentSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiSegment', ApiSegmentSchema)