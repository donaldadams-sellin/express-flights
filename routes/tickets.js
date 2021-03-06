const express = require('express');
const router= express.Router();
const ticketCtrl = require('../controllers/tickets');

//GET  new tickets page
router.get('/flights/:id/tickets/new', ticketCtrl.new);

//POST ticket after creation
router.post('/flights/:id/tickets/', ticketCtrl.create);

//DELETE specified ticket at /tickets/:id
router.delete('/tickets/:id', ticketCtrl.delete);

module.exports= router;
