const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT

app.use(cors());
app.use(express.json());
