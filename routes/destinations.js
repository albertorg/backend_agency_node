const express = require('express')
const { getDestinations, getDestinationsFilter } = require('../controllers/destinations')
const router = express.Router()


// Get full destinations
router.get('/', getDestinations)

// Get destinations with filds selecteds
router.get('/filter', getDestinationsFilter)


module.exports = router