const express = require('express')
const router = express.Router()
const { getHotels, getHotelsFilter } = require('../controllers/hotels')



// Get full hotels
router.get('/', getHotels)

// Get hotels with filds selecteds
router.get('/filter', getHotelsFilter)


module.exports = router