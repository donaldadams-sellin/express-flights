const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/destinations')

//POST to /flights/:id/destinations
router.post('/flights/:id/destinations', flightsCtrl.create)



module.exports = router;
