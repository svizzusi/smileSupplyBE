const mongoose = require('mongoose')

// Define a schema for the "User" collection
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
    },
    order: {
        type: Boolean,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
})


// Export the model based on the defined schema
module.exports = mongoose.model('Product', ProductSchema)