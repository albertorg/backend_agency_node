const { Schema, model } = require('mongoose')

const ApiHotelIssueSchema = Schema({
    alternative: {
        type: Boolean
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String,
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'ApiContent'
    },
    issueCode: {
        type: String
    },
    issueType: {
        type: String
    },
    order: {
        type: Number
    }

})

module.exports = model('ApiHotelIssue', ApiHotelIssueSchema)