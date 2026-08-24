const express = require('express');
const router = express.Router();

const travellerController = require('../controllers/traveller');

router.get('/', travellerController.index);

module.exports = router;