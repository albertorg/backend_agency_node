const express = require('express')
const router = express.Router()
const { getHotels, getHotelsFields } = require('../controllers/hotels')



// Get full hotels
router.get('/', getHotels)

// Get hotels with filds selecteds
router.get('/fields', getHotelsFields)


module.exports = router