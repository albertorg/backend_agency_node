const { response, text } = require('express')
const Destinations = require('../models/api_models/Destinations')


const getDestinations = async (req, res = response) => {

    console.log(req)
    const destinations = await Destinations.find()

    res.json({
        ok: true,
        msg: 'getDestinations',
        destinations
    })
}
    
const getDestinationsFilter = async (req, res = response) => {

    const { text, fields, limit = 5 } = req.query

    const ExpReg = new RegExp(text, 'i');

    const destinations = await Destinations.find({ 'name.content': ExpReg },
        fields
            ? `name.content code ${fields}`
            : 'name.content code').limit(limit)


    res.json({
        ok: true,
        msg: 'getDestinationsFilds',
        destinations
    })
}

module.exports = {
    getDestinations,
    getDestinationsFilter
}