const productSchema = require('../models/Product.js'); // Import the product schema

const handleErrorResponse = (res, err) => {
    res.status(500).json(err) //send error response as json
            console.error(err) //log the error
};

module.exports = {
    getProducts: async (req, res) => {
        const userId = req.params.id; // Extract the userId parameter from the request
        try {
            const Product = await productSchema.find({ userId: userId }) // Retrieve all Data from collection
            res.status(200).json(Product) // Sends response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    createProduct: async (req, res) => {
        try {
            const Product = await productSchema.create(req.body) // Add Data to the collection
            res.status(200).json(Product) // Sends response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    getProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            const Product = await productSchema.findById(id) // Retrieve data by its ID
            res.status(200).json(Product) // Sends response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    updateProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            await productSchema.findByIdAndUpdate(id, { // Find and update data by its ID
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity,
                frequency: req.body.frequency,
                reorderReminderWeek: req.body.reorderReminderWeek
            }) 
            .then(Product => res.json(Product)) // Convert data to JSON and send response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    orderProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            await productSchema.findByIdAndUpdate(id, { // Find and update data by its ID
                order: req.body.order
            }) 
            .then(Product => res.json(Product)) // Convert data to JSON and send response
        } catch (err) {
            handleErrorResponse(res, err)
        }
    },

    resetFrequency: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await productSchema.findById(id); // Find the product by ID
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            product.frequency = product.originalFrequency; // Set the 'frequency' to the 'originalFrequency' value from the schema
            product.order = false; // Set 'order' to false, if needed
            const updatedProduct = await product.save(); // Save the updated product
            res.json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating product' });
            res.json(err) //send error response as json
        }
    },

    deleteProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            await productSchema.findByIdAndDelete(id) // Find and Delete data by its ID
            .then(Product => res.json(Product)) // Convert data to JSON and send response  
        } catch (err) {
            handleErrorResponse(res, err)
        }
    }
}