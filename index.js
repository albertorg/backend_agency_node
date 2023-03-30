const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/config')
require('dotenv').config()


// Create express server
const app = express()

// Database
dbConnection()

// Cors
app.use(cors()) // cors({origin: 'https://tupaginaweb.com'}) in producction

// Reading and parsing body 
app.use(express.json())

// Public dir
app.use( express.static('public') )

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/hotels', require('./routes/hotels'))
app.use('/api/destinations', require('./routes/destinations'))
app.use('/api/booking', require('./routes/booking'))
// TODO: auth // create user, login, renew token
// TODO: CRUD: Events

// Requests listener
app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`)
})