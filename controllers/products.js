const productSchema = require('../models/Product.js'); // Import the product schema

module.exports = {
    getProducts: async (req, res) => {
        const userId = req.params.id; // Extract the userId parameter from the request
        console.log(userId);  
        try {
            await productSchema.find({ userId: userId }) // Retrieve all Data from collection
            .then(Product => res.json(Product)) // Converts data to json and sends response
        } catch (err) {
            res.json(err) //send error response as json
            console.log(err) //log the error
            
        }
    },

    createProduct: async (req, res) => {
        try {
            await productSchema.create(req.body) // Add Data to the collection
            .then(Product => {
                res.json(Product)
            }) // Convert data to JSON and send response
        } catch (err) {
            console.log(err)
        }
    },

    getProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            await productSchema.findById(id) // Retrieve data by its ID
            .then(Product => res.json(Product)) // Convert data to JSON and send response
            
        } catch (err) {
            console.log(err)
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
            console.log(err)
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
            console.log(err)      
        }
    },

    resetFrequency: async (req, res) => {
        const id = req.params.id;
        
        try {
        // Find the product by ID
        const product = await productSchema.findById(id);
        
        if (!product) {
        return res.status(404).json({ error: 'Product not found' });
        }
        
        // Set the 'frequency' to the 'originalFrequency' value from the schema
        product.frequency = product.originalFrequency;
        
        // Set 'order' to false, if needed
        product.order = false;
        
        // Save the updated product
        const updatedProduct = await product.save();
        
        res.json(updatedProduct);
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating product' });
        }
        },

    deleteProduct: async (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        try {
            await productSchema.findByIdAndDelete(id) // Find and Delete data by its ID
            .then(Product => res.json(Product)) // Convert data to JSON and send response  
        } catch (err) {
            console.log(err)
        }
    }
}