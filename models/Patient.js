const mongoose = require('mongoose')

// Define a schema for the "Patients" collection
const PatientSchema = new mongoose.Schema({
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    frequency: {
        type: Number,
    },
    originalFrequency: {
        type: Number,
    },
    currentWeek: {
        type: String,
    },
    patientReminderWeek: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
})

// Export the model based on the defined schema
module.exports = mongoose.model('patients', PatientSchema)