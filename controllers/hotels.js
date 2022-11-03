const { response } = require('express')
const Hotels = require('../models/api_models/Hotels')



const getHotels = async (req, res = response) => {

    const hotels = await Hotels.find()

    res.json({
        ok: true,
        msg: 'getHotels',
        hotels
    })
}

const getHotelsFilter = async ({body}, res = response) => {

    const ExpReg = new RegExp(body.query, 'i');

    const hotels = await Hotels.find({ 'name.content': ExpReg },
        body.fields 
            ? `name.content code ${body.fields}` 
            : 'name.content code')
    
    

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