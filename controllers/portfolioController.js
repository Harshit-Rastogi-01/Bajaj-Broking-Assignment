const portfolioService = require('../services/portfolioService');

function getPortfolio(req, res) {
    res.json(portfolioService.getPortfolio());
}

module.exports = { getPortfolio };
