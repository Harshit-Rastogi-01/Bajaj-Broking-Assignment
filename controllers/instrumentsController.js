const instrumentsService = require('../services/instrumentsService');

function getInstruments(req, res) {
    res.json(instrumentsService.getAllInstruments());
}

module.exports = { getInstruments };
