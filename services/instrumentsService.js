const { instruments } = require('../data/db');

function getAllInstruments() {
    return instruments;
}

module.exports = { getAllInstruments };
