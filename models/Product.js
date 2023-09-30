const mongoose = require('mongoose')

// Define a schema for the "User" collection
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
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
        required: true,
    },
    savedProducts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})


// Export the model based on the defined schema
module.exports = mongoose.model('Product', ProductSchema)