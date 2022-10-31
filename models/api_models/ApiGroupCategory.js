const { Schema, model } = require('mongoose')

const ApiGroupCategorySchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    order: {
        type: Number
    }

})

module.exports = model('ApiGroupCategory', ApiGroupCategorySchema)