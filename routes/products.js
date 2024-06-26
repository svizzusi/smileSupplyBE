// Import required libraries and modules
const express = require('express'); // Import the Express.js framework
const router = express.Router(); // Create an Express router
const productsController = require('../controllers/products')

// Route for creating a product
router.post('/createProduct', productsController.createProduct);

// Express route to the root route for fetching users products by the user id
router.get('/getProducts/:id', productsController.getProducts)

// Express route to the root route for fetching users products by the product id
router.get('/getProduct/:id', productsController.getProduct)

// Express route for updating a product by its ID(From MongoDB)
router.put('/updateProduct/:id', productsController.updateProduct)

// Route for resetting the frequency of a product back to it's original frequency
router.put('/resetFrequency/:id', productsController.resetFrequency);

// Express route for deleting a product by its ID(From MongoDB)
router.delete('/deleteProduct/:id', productsController.deleteProduct)

const productRouter = router;
module.exports = productRouter; // Export the productRouter for use in other parts of the application