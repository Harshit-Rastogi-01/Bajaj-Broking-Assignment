const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/orders', ordersController.placeOrder);
router.get('/orders/:orderId', ordersController.getOrder);

module.exports = router;
