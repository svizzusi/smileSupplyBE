// Import required libraries and modules
const express = require('express'); // Import the Express.js framework
const router = express.Router(); // Create an Express router
const productsController = require('../controllers/products')

// Route for creating a product
router.post('/createProduct', productsController.createProduct);

router.get('/getProducts', productsController.getProducts)

const productRouter = router;
module.exports = productRouter; // Export the productRouter for use in other parts of the application