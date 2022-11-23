const axios = require("axios");
const xSignature = require("../helpers/signature-generator");
// const HotelsDetails = require("../models/api_models/Hotels-details");
// const Destinations = require("../models/api_models/Destinations");
const Hotels = require("../models/api_models/Hotels");



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


    
 /////////// hotels details dont work with a lot of codes  /////////////


//     const hotelsCodes = await Hotels.find({}, 'code')
    
//     let codes = []
//     hotelsCodes.map(hotel => (
//         codes.push(hotel.code)
//     ))
    
//     const strCodes = codes.join()    


//     const config = {
//         method: 'get',
//         url: `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${strCodes}/details?language=ENG&useSecondaryLanguage=False`,
//         headers: {
//             'Api-key': process.env.API_KEY,
//             'X-Signature': xSignature(),
//             'Accept': 'application/json',
//             'Accept-Encoding': 'gzip'
//         }
//     }


//     axios(config)
//         .then(async (response) => {

//             console.log(response)
//             // await response.data.hotels.map((hotel) => {
//             //     const hotelModel = new HotelsDetails(hotel)
//             //     hotelModel.save()
//             // })
//             // console.log('Done!!!!')

            

//         })
//         .catch((error) => {
//             console.log(error.data)
//         })
    

}


module.exports = {
    apiToDB
}