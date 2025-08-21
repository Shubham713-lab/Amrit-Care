// backend/src/server.js

const express = require('express');
const mongoose = require('mongoose'); // Make sure mongoose is required
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// --- UNCOMMENT THIS SECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch(err => console.error("MongoDB connection error:", err));
// -----------------------------

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the AMIRT-CARE API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});