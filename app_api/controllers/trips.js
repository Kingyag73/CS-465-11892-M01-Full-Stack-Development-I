const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        console.log('Error retrieving trips:', err);
        res.status(500).json({
            message: 'Error retrieving trips',
            error: err.message
        });
    }
};

// GET a specific trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({
            code: req.params.tripCode
        });

        if (!trip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        res.status(200).json(trip);
    } catch (err) {
        console.log('Error retrieving trip:', err);
        res.status(500).json({
            message: 'Error retrieving trip',
            error: err.message
        });
    }
};

// POST a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const trip = new Trip(req.body);
        const savedTrip = await trip.save();

        res.status(201).json(savedTrip);
    } catch (err) {
        console.log('Error adding trip:', err);
        res.status(400).json({
            message: 'Error adding trip',
            error: err.message
        });
    }
};

// PUT/update an existing trip
const tripsUpdateTrip = async (req, res) => {
    try {
        const updatedTrip = await Trip.findOneAndUpdate(
            { code: req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                price: req.body.price
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTrip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        res.status(200).json(updatedTrip);
    } catch (err) {
        console.log('Error updating trip:', err);
        res.status(500).json({
            message: 'Error updating trip',
            error: err.message
        });
    }
};

// DELETE a trip
const tripsDeleteTrip = async (req, res) => {
    try {
        const deletedTrip = await Trip.findOneAndDelete({
            code: req.params.tripCode
        });

        if (!deletedTrip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        res.status(200).json({
            message: 'Trip deleted successfully',
            trip: deletedTrip
        });
    } catch (err) {
        console.log('Error deleting trip:', err);
        res.status(500).json({
            message: 'Error deleting trip',
            error: err.message
        });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};