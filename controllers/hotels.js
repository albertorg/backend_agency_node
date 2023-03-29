const { response } = require('express')
const Hotels = require('../models/api_models/Hotels')

const getHotels = async (req, res = response) => {

    const { codes = null } = req.query

    const hotels = await Promise.all(codes.map(async (code) => {
    
        const hotel = await Hotels.find({ 'code': code })
        return hotel[0]
    }))

    res.json({
        ok: true,
        msg: 'getHotelsDetails',
        hotels
    })
    
}

const getHotelsFilter = async ( req, res = response ) => {

    const fundamentalFields = 'name.content code city coordinates destinationCode'

    const {text, fields, limit = 15, destinationCode = null} = req.query
    let hotels = []
    
    if (destinationCode) {
        hotels = await Hotels.find({ 'destinationCode': destinationCode },
            fields
                ? `${fundamentalFields} ${fields}`
                : fundamentalFields)
    }else {
        const escapedString = text.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')
        const ExpReg = new RegExp(escapedString, 'i')

        hotels = await Hotels.find({ 'name.content': ExpReg },
            fields
                ? `${fundamentalFields} ${fields}`
                : fundamentalFields).limit(limit)
    }
    
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