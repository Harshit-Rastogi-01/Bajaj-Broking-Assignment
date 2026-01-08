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


