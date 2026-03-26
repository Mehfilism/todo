const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api/auth', authRoutes); // Open to everyone
app.use('/api/todos', todoRoutes); // Protected routes

app.get('/', (req, res) => {
    res.send("Welcome to the To-Do API!");
});

module.exports = app;
