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

const getHotelsFields = async (req, res = response) => {

    const hotels = await Hotels.find({ hotels: [{ name: { content: 'Memories Miramar Habana' } }]  }, 'name code' )

    res.json({
        ok: true,
        msg: 'getHotelsFilds',
        hotels
    })
}

module.exports = {
    getHotels,
    getHotelsFields
}