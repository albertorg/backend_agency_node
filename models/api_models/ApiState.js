const { Schema, model } = require('mongoose')

const ApiStateSchema = Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
    }

})

ApiStateSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    return object
})

module.exports = model('ApiState', ApiStateSchema)