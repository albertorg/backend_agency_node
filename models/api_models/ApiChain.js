const { Schema, model } = require('mongoose')

const ApiChainSchema = Schema({
    code: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    }

})

module.exports = model('ApiChain', ApiChainSchema)