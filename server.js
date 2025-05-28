require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerRoute = require('./routes/swagger');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Z-Key']
}));
app.use(express.json());
app.use(swaggerRoute); // Ensure this is after express.json()

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// Connect and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});