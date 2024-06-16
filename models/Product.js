const mongoose = require('mongoose')

// Define a schema for the "User" collection
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    productId: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    frequency: {
        type: Number,
    },
    originalFrequency: {
        type: Number,
    },
    order: {
        type: Boolean,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    currentWeek: {
        type: String,
      },
    reorderReminderWeek: {
        type: String,
      }
})


// Export the model based on the defined schema
module.exports = mongoose.model('Product', ProductSchema)