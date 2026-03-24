/*
backend/server.js
- Express app + middleware
- route registration
- DB connection
*/

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

// healthcheck route
app.get('/ping', (req, res) => res.send('pong'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
