const express = require('express')
const router = express.Router()
const patientsController = require('../controllers/patients')

// Express route to the root route for fetching users patients by the user id
router.get('/getPatients/:id', patientsController.getPatients)

// Route for creating a patient
router.post('/addPatient', patientsController.addPatient)

// Express route to the root route for fetching users patients by the patient id
router.get('/getPatient/:id', patientsController.getPatient)

// Express route for updating a patient by its ID(From MongoDB)
router.put('/updatePatient/:id', patientsController.updatePatient)

// Express route for deleting a patient by its ID(From MongoDB)
router.delete('/deletePatient/:id', patientsController.deletePatient)

const patientRouter = router
module.exports = patientRouter