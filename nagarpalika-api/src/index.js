// src/index.js
const express = require('express');
const cors = require('cors');
require('./config/db'); // This runs the db connection test

// Import your routes
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = 3001; // We'll run the backend on a different port

// --- Middleware ---
// 1. Enable CORS for all routes
app.use(cors());
// 2. Enable Express to parse JSON data from React
app.use(express.json());

// --- Routes ---
// Tell Express to use your form routes for any URL starting with /api/forms
app.use('/api/forms', formRoutes);

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});