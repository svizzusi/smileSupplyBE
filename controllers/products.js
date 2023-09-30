const productSchema = require('../models/Product.js'); // Import the product schema

module.exports = {
    // getProducts: (req, res) => {
    //     const userId = req.params.id; // Extract the userId parameter from the request
    //     console.log(userId);  
    //     productSchema.find({ userId: userId }) // Retrieve all Data from collection
    //     .then(Product => res.json(Product)) // Converts data to json and sends response
    //     .catch(err => {
    //         res.json(err) //send error response as json
    //         console.log(err) //log the error
    //     })
    // },
    createProduct: (req, res) => {
        productSchema.create(req.body) // Add Data to the collection
        .then(Product => {
            res.json(Product)
        }) // Convert data to JSON and send response

        .catch(err => {
            console.log(err)
        })
    },
}