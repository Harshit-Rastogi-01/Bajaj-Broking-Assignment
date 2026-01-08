const express = require('express');
const router = express.Router();
const instrumentsController = require('../controllers/instrumentsController');

router.get('/instruments', instrumentsController.getInstruments);

module.exports = router;
