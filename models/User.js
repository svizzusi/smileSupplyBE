const mongoose = require('mongoose')

// Define a schema for the "User" collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
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