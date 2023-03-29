const express = require('express')
const router = express.Router()
const { getAvailability, getConfirmation } = require('../controllers/booking')



router.get('/availability', getAvailability)

// router.get('/CheckRate', getHotelsFilter)

router.get('/confirmation', getConfirmation)


module.exports = router