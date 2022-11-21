const { Schema, model } = require('mongoose')

const ApiImageTypeSchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },

})

ApiImageTypeSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiImageType', ApiImageTypeSchema)