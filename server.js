const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_server/models/db');
require('./app_server/models/trips');
require('./app_api/models/users');

const app = express();
const PORT = 3000;

// Allow Angular to communicate with the Express API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.use(express.json());

// Set up Handlebars views
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server/views/partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// Use MVC routes
const travellerRoutes = require('./app_server/routes/index');
app.use('/', travellerRoutes);

// Authentication routes
const authRoutes = require('./app_api/routes/auth');
app.use('/api/auth', authRoutes);

// Use REST API routes
const apiRoutes = require('./app_api/routes/index');
app.use('/api', apiRoutes);

// Start server after MongoDB connection is established
const mongoose = require('mongoose');

mongoose.connection.once('connected', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});