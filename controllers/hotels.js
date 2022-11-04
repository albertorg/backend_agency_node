const { response, text } = require('express')
const Hotels = require('../models/api_models/Hotels')


const getHotels = async (req, res = response) => {

    console.log(req)
    const hotels = await Hotels.find()

    res.json({
        ok: true,
        msg: 'getHotels',
        hotels
    })
}

const getHotelsFilter = async ( req, res = response ) => {

    const {text, fields, limit = 15} = req.query

    const ExpReg = new RegExp(text, 'i');

    const hotels = await Hotels.find({ 'name.content': ExpReg },
        fields 
            ? `name.content code ${fields}` 
            : 'name.content code').limit(limit)
    
    
    res.json({
        ok: true,
        msg: 'getHotelsFilds',
        hotels
    })
}

module.exports = {
    getHotels,
    getHotelsFilter
}