const { Schema, model } = require('mongoose')

const ApiBoardSchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    multiLingualCode: {
        type: String
    }

})

module.exports = model('ApiBoard', ApiBoardSchema)