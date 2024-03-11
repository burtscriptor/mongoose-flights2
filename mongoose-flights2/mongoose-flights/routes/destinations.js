var express = require('express');
var router = express.Router();
var destinationController = require('../controllers/destination');

router.post('/flights/:id/flights', destinationController.create); // Is flights right?

module.exports = router;