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
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
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
        ref: "User",
        required: true,
    },
    currentWeek: {
        data: { type: Object }
      },
    reorderReminderWeek: {
        data: { type: Object }
      }
})


// Export the model based on the defined schema
module.exports = mongoose.model('Product', ProductSchema)