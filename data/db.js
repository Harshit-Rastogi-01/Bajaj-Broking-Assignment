const instruments = [
    { symbol: "RELIANCE", exchange: "NSE", instrumentType: "STOCK", lastTradedPrice: 2500 },
    { symbol: "TCS", exchange: "NSE", instrumentType: "STOCK", lastTradedPrice: 3300 },
    { symbol: "INFY", exchange: "NSE", instrumentType: "STOCK", lastTradedPrice: 1500 }
];

const orders = [];
const trades = [];
const portfolio = {};

module.exports = { instruments, orders, trades, portfolio };
