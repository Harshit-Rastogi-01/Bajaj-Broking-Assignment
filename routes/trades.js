const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/tradesController');

router.get('/trades', tradesController.getTrades);

module.exports = router;
