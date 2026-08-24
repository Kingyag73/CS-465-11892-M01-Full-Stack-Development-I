const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const index = async (req, res) => {
    try {
        const trips = await Trip.find();

        res.render('index', {
            title: 'Travlr Getaways',
            heading: 'Welcome to Travlr Getaways',
            message: 'Explore amazing travel destinations.',
            trips: trips
        });
    } catch (err) {
        console.log('Error retrieving trips:', err);
        res.status(500).send('Error retrieving trips');
    }
};

module.exports = {
    index
};