const { response , request} = require('express')
const xSignature = require('../helpers/signature-generator');
const axios = require('axios');
const Hotels = require('../models/api_models/Hotels');


const getAvailability = async (req = request, res = response) => {

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

const getConfirmation = async (req = response, res = response) => {

    try {
        const booking = req.body

        const config = {
            method: 'post',
            url: `${process.env.DOMAIN_SECURE}/hotel-api/1.0/bookings`,
            headers: {
                'Api-key': process.env.API_KEY,
                'X-Signature': xSignature(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: booking
        };

        const { data } = await axios(config)

        res.send(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error'
        })
    }
}

const checkRate = async (req = response, res = response) => {

    try {
        const rate = req.body

        const config = {
            method: 'post',
            url: `${process.env.DOMAIN_SECURE}/hotel-api/1.0/checkrates`,
            headers: {
                'Api-key': process.env.API_KEY,
                'X-Signature': xSignature(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: rate
        };

        const { data } = await axios(config)

        res.send(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error'
        })
    }
}

module.exports = {
    checkRate,
    getAvailability,
    getConfirmation
}