const { Schema, model } = require('mongoose')

const ApiStateSchema = Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
    }

})

module.exports = model('ApiState', ApiStateSchema)