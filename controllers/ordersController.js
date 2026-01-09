const ordersService = require('../services/ordersService');

function placeOrder(req, res) {
    const result = ordersService.placeOrder(req.body);
    if (result.error) return res.status(400).json(result);
    //else
    res.json(result);
}

function getOrder(req, res) {
    const result = ordersService.getOrderStatus(req.params.orderId);
    if (result.error) return res.status(404).json(result);
    res.json(result);
}

module.exports = { placeOrder, getOrder };
