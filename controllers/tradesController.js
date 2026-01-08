const tradesService = require('../services/tradesService');

function getTrades(req, res) {
    res.json(tradesService.getAllTrades());
}

module.exports = { getTrades };
