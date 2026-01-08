class Order {
    constructor({ id, symbol, type, style, quantity, price }) {
        this.id = id;
        this.symbol = symbol;
        this.type = type; // BUY or SELL
        this.style = style; // MARKET or LIMIT
        this.quantity = quantity;
        this.price = price; // For LIMIT orders
        this.status = 'NEW'; // NEW, PLACED, EXECUTED, CANCELLED
    }
}

module.exports = Order;
