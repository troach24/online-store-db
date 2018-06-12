const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const indexRouter = require('./routes/index');
const inventoryRouter = require('./routes/inventory');
const cartRouter = require('./routes/cart');
const buyRouter = require('./routes/buy')
const sellRouter = require('./routes/sell');
const newItemRouter = require('./routes/new-item');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to online store API! 🙌 💸'
  });
});

app.use('/', indexRouter);
app.use('/inventory', inventoryRouter);
app.use('/cart', cartRouter);
app.use('/buy', buyRouter);
app.use('/sell', sellRouter);
app.use('/new-item', newItemRouter);

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
