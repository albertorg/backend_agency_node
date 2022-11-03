const axios = require("axios");
const xSignature = require("../helpers/signature-generator");
const Destinations = require("../models/api_models/Destinations");
// const Hotels = require("../models/api_models/Hotels");



const apiToDB = async () => {

    // const config = {
    //     method: 'get',
    //     url: 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&countryCode=CU&language=ENG&from=1&to=1000',
    //     headers: {
    //         'Api-key': process.env.API_KEY,
    //         'X-Signature': xSignature(),
    //         'Accept': 'application/json',
    //         'Accept-Encoding': 'gzip'
    //     }
    // }


    // axios(config)
    //     .then(async (response) => {


    //         await response.data.hotels.map((hotel) => {
    //             const hotelModel = new Hotels(hotel)
    //             hotelModel.save()
    //         })
    //         console.log('Done!!!!')

            

    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })



    // const config = {
    //     method: 'get',
    //     url: 'https://api.test.hotelbeds.com/hotel-content-api/1.0/locations/destinations?fields=all&countryCodes=CU&language=ENG&from=1&to=100&useSecondaryLanguage=false',
    //     headers: {
    //         'Api-key': process.env.API_KEY,
    //         'X-Signature': xSignature(),
    //         'Accept': 'application/json',
    //         'Accept-Encoding': 'gzip'
    //     }
    // }


    // axios(config)
    //     .then(async (response) => {


    //         await response.data.destinations.map((destination) => {
    //             const destinationModel = new Destinations(destination)
    //             destinationModel.save()
    //         })
    //         console.log('Done!!!!')



    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    

}


module.exports = {
    apiToDB
}