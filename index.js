const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User');
const dotenv = require('dotenv'); // Require dotenv at the top

dotenv.config({ path: './config/.env' });

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173, https://www.smilesupply.net/'); // Update with your frontend URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(express.json());

// Define a function to connect to the database
const connectDB = async () => {
  try {
    // Check if the DB_STRING environment variable is defined
    if (!process.env.DB_STRING) {
      throw new Error('DB_STRING environment variable is not defined.');
    }

    await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Start the server after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if there's an error
  }
};

// Call the connectDB function to initiate the database connection
connectDB();

// Use your routes here
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Other middleware, routes, and error handlers can be added as needed.
