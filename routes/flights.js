var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

//GET /movies
router.get('/', flightsCtrl.index);

//GET /movies/new
router.get('/new', flightsCtrl.new);

//POST to /movies to create new flights
router.post('/', flightsCtrl.create)

module.exports = router;
