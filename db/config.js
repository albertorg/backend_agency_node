const mongoose = require('mongoose');
const { apiToDB } = require('../api/apiToDB');


const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN)
        console.log('db online')
        await apiToDB()

    } catch (error) {
        console.log(error)
        throw new Error('Error while initializing DB')
    }
}

module.exports = {
    dbConnection
}