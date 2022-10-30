const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const { createUser, loginUser, revalidateToken } = require('../controllers/auth')
const { fieldsValidator } = require('../middlewares/fields-validators')
const { ValidateJWT } = require('../middlewares/validate-jwt')


router.post(
    '/new',
    [// middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        fieldsValidator
    ],
    createUser)

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        fieldsValidator
    ]
    , loginUser)

router.get('/renew', ValidateJWT, revalidateToken)

module.exports = router