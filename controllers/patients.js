const patientSchema = require('../models/Patient')

const handleErrorResponse = (res, err) => {
    res.status(500).json(err) //send error response as json
            console.error(err) //log the error
};

module.exports = {
    getPatients: async (req,res) => {
        const userId = req.params.id;
        try {
            const Patient = await patientSchema.find({userId: userId})
            res.status(200).json(Patient)
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },
    
    addPatient: async (req, res) => {
        console.log(req)
        console.log(req.body)
        try {
            const Patient = await patientSchema.create(req.body)
            res.status(200).json(Patient)
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    getPatient: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            const Patient = await patientSchema.findById(id) // Retrieve data by its ID
            res.status(200).json(Patient) // Sends response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    updatePatient: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            const Patient = await patientSchema.findByIdAndUpdate(id, { // Find and update data by its ID
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                phone: req.body.phone,
                email: req.body.email,
                frequency: req.body.frequency,
                patientReminderWeek: req.body.patientReminderWeek
            }) 
            res.status(200).json(Patient) // Sends response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    deletePatient: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            const Patient = await patientSchema.findByIdAndDelete(id) // Find and Delete data by its ID
            res.status(200).json(Patient) // Sends response  
        } catch (err) {
            handleErrorResponse(res, err)
        }
    }
}