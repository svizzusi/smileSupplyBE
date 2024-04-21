const mongoose = require('mongoose')

// Define a schema for the "User" collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    savedProducts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
    },
    savedPatients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patients",
    }
})


// Export the model based on the defined schema
module.exports = mongoose.model('Users', UserSchema)