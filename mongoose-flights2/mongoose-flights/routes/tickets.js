var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/tickets')

/*/id:/tickets/new, flightsController.newTicket */
router.get('/:id/new/ticket', ticketsController.new);
router.post('/tickets', ticketsController.create);

module.exports = router;