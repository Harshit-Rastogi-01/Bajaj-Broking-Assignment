const { trades } = require('../data/db');

function getAllTrades() {
    return trades;
}

module.exports = { getAllTrades };
