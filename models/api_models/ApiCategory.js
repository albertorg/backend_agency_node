const { Schema, model } = require('mongoose')

const ApiCategorySchema = Schema({
    accommodationType: {
        type: String
    },
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    group: {
        type: String
    },
    simpleCode: {
        type: Number
    }

})

module.exports = model('ApiCategory', ApiCategorySchema)