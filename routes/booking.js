const express = require('express')
const router = express.Router()
const { getAvailability, getConfirmation, checkRate } = require('../controllers/booking')



router.post('/availability', getAvailability)

router.get('/checkrates', checkRate)

router.post('/confirmation', getConfirmation)



module.exports = router