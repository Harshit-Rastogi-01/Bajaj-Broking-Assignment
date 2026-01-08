
# Bajaj Trading Backend (Simulated)
## Overview

This project is a Node.js-based backend application that simulates a simplified trading platform similar to online stock broking systems.

The purpose of this assignment is to demonstrate:

* Backend system design

* RESTful API development

Understanding of basic trading workflows such as instruments, orders, trades, and portfolio

Clean code structure and in-memory data handling

## ⚠️ Note:
This is a simulation only. There is no real market connectivity or integration with live Bajaj Broking APIs.
## Tech Stack



**Backend**: Node.js with Express

**API Format**: JSON

**Database**: In-memory storage (JavaScript arrays and objects)

**Authentication**: Mocked (single hardcoded user)

## Project Structure :
```
bajaj-trading/
│
├── index.js               # Application entry point
│
├── data/
│   └── db.js               # In-memory database (orders, trades, portfolio)
│
├── routes/
│   ├── instruments.js      # Instrument-related API routes
│   ├── orders.js           # Order placement & status APIs
│   ├── trades.js           # Executed trades APIs
│   └── portfolio.js        # Portfolio holdings APIs
│
├── controllers/            # (Reserved) Request-handling logic
├── services/               # (Reserved) Business logic layer
├── models/                 # (Reserved) Data models
│
└── README.md               # Project documentation
```
## How to Run the Project

- Clone the repository

```bash
  git clone https://github.com/<your-username>bajaj-broking-assignment.git
  cd bajaj-broking-assignment

```
- Install dependencies
``` 
npm install
```
- Start the Server 
```
npm start
```
- The server will start at:
```
http://localhost:3000
```
## API Endpoints



| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| GET    | `/api/v1/instruments` | Fetch all tradable instruments |
| POST   | `/api/v1/orders`      | Place a BUY or SELL order      |
| GET    | `/api/v1/orders/:id`  | Fetch order status by order ID |
| GET    | `/api/v1/trades`      | Fetch executed trades          |
| GET    | `/api/v1/portfolio`   | Fetch portfolio holdings       |

#### Sample API Usage
``` 
GET /api/v1/instruments
```
#### Place Market order
```
POST /api/v1/orders

```
```
{
  "symbol": "RELIANCE",
  "type": "BUY",
  "style": "MARKET",
  "quantity": 10
}
```
#### Fetch Order Status

```
GET /api/v1/orders/1
```

#### Fetch Executed Trades

```
GET /api/v1/trades
```
#### Fetch Portfolio Holdings

```
GET /api/v1/portfolio
```
## Order Execution Logic (Simplified)

- Market Orders: Executed immediately at the instrument’s last traded price

- Limit Orders: Executed only if the limit price matches the market price

- Executed orders generate trades

- Trades update the portfolio automatically

## Data Handling
- Instruments are preloaded in memory

- Orders, Trades, and Portfolio start empty

- Data is populated dynamically based on user actions

- No persistent storage is used

## Assumptions Made

- Single hardcoded user (no login/authentication)

- In-memory storage only (data resets on server restart)

- No order cancellation or modification

- No real-time price updates

- Portfolio is derived from executed trades

## Purpose of the Project

- The project represents a backend trading system designed with clean REST APIs and modular architecture.
- It can later be extended into a full SDK or integrated with frontend applications.
## Author
Harshit Rastogi
(Campus Hiring Assignment – Bajaj Broking)

- [@Harshit-Rastogi](https://github.com/Harshit-Rastogi-01)




