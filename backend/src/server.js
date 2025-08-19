// backend/src/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(cors()); // This is crucial for connecting the frontend
app.use(express.json());

/*
// We will connect to the database later
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch(err => console.error("MongoDB connection error:", err));
*/

// A simple API test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the AMIRT-CARE API! Connection successful.' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});