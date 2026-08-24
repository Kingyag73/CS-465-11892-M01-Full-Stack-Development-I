const express = require('express');

const router = express.Router();

const tripsController = require('../controllers/trips');

const {
    authenticateJWT,
    requireAdmin
} = require('../middleware/auth');

// GET all trips - public
router.get('/trips', tripsController.tripsList);

// GET one trip - public
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// POST - admin only
router.post(
    '/trips',
    authenticateJWT,
    requireAdmin,
    tripsController.tripsAddTrip
);

// PUT - admin only
router.put(
    '/trips/:tripCode',
    authenticateJWT,
    requireAdmin,
    tripsController.tripsUpdateTrip
);

// DELETE - admin only
router.delete(
    '/trips/:tripCode',
    authenticateJWT,
    requireAdmin,
    tripsController.tripsDeleteTrip
);

module.exports = router;