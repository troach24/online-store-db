require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const indexRouter = require('./routes/index');
const inventoryRouter = require('./routes/inventory');
const cartRouter = require('./routes/cart');
const acceptPaymentRouter = require ('./routes/accept-payment');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    message: 
    'Welcome to online store API! 🙌 💸 Use /inventory or /cart routes to see each datatable';
  });
});

app.use('/', indexRouter);
app.use('/inventory', inventoryRouter);
app.use('/cart', cartRouter);
app.use('/accept-payment', acceptPaymentRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
