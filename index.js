const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bajaj Trading SDK Server is running!');
});
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});


const instrumentsRoutes = require('./routes/instruments');
const ordersRoutes = require('./routes/orders');
const tradesRoutes = require('./routes/trades');
const portfolioRoutes = require('./routes/portfolio');



app.use('/api/v1', instrumentsRoutes);
app.use('/api/v1', ordersRoutes);
app.use('/api/v1', tradesRoutes);
app.use('/api/v1', portfolioRoutes);


// GET: http://localhost:3000/api/v1/instruments
// POST: http://localhost:3000/api/v1/orders
// body {
//   "symbol": "RELIANCE",
//   "type": "BUY",
//   "style": "MARKET",
//   "quantity": 10
// }


// GET : http://localhost:3000/api/v1/trades

// POST: http://localhost:3000/api/v1/orders
// body {
//   "symbol": "RELIANCE",
//   "type": "BUY",
//   "style": "MARKET",
//   "quantity": 10
// }

// GET : http://localhost:3000/api/v1/portfolio