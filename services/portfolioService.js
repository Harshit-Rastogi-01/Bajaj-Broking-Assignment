const { portfolio, instruments } = require('../data/db');

function getPortfolio() {
    const result = [];

    for (let symbol in portfolio) {
        const instrument = instruments.find(i => i.symbol === symbol);
        const holding = portfolio[symbol];

        result.push({
            symbol,
            quantity: holding.quantity,
            averagePrice: holding.averagePrice,
            currentValue: holding.quantity * instrument.lastTradedPrice
        });
    }

    return result;
}

module.exports = { getPortfolio };
