const { orders, trades, portfolio, instruments } = require('../data/db');
const Order = require('../models/order');

let orderIdCounter = 1;

function placeOrder({ symbol, type, style, quantity, price }) {
    // Validations
    if (!symbol || !type || !style || quantity <= 0) {
        return { error: "Invalid order details" };
    }

    const order = new Order({
        id: orderIdCounter++,
        symbol, type, style, quantity, price
    });

    order.status = 'PLACED';
    orders.push(order);

    // Simple execution simulation
    const instrument = instruments.find(inst => inst.symbol === symbol);
    if (style === "MARKET") {
        executeOrder(order, instrument.lastTradedPrice);
    } else if (style === "LIMIT" && price === instrument.lastTradedPrice) {
        executeOrder(order, price);
    }

    return order;
}

function executeOrder(order, executedPrice) {
    order.status = 'EXECUTED';
    trades.push({
        tradeId: trades.length + 1,
        orderId: order.id,
        symbol: order.symbol,
        executedPrice,
        quantity: order.quantity
    });

    // Update portfolio
    if (!portfolio[order.symbol]) {
        portfolio[order.symbol] = { quantity: 0, averagePrice: 0 };
    }
    const p = portfolio[order.symbol];
    if (order.type === 'BUY') {
        const totalCost = p.averagePrice * p.quantity + executedPrice * order.quantity;
        p.quantity += order.quantity;
        p.averagePrice = totalCost / p.quantity;
    } else if (order.type === 'SELL') {
        p.quantity -= order.quantity;
        if (p.quantity < 0) p.quantity = 0;
    }
}

function getOrderStatus(orderId) {
    return orders.find(o => o.id === parseInt(orderId)) || { error: "Order not found" };
}

module.exports = { placeOrder, getOrderStatus };
