require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerRoute = require('./routes/swagger');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
require('./config/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Z-Key']
}));
app.use(express.json());

// Session & Passport (must be before routes)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));
app.use(passport.initialize());
app.use(passport.session());

// Swagger
app.use(swaggerRoute);

// Routes (must come after session & passport)
app.get('/login', (req, res) => {
  return res.redirect('/auth/github');
});

app.use('/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);


app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(`Logged in as ${req.user.username || req.user.displayName}`);
  }
  res.send('Welcome! Please <a href="/login">login</a>.');
});


app.get('/logout', (req, res) => {
  return res.redirect('/auth/logout');
});

// Connect and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
