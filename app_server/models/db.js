const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';

mongoose.connect(dbURI)
    .then(() => console.log('Mongoose connected successfully'))
    .catch(err => console.log('Mongoose connection error:', err));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;