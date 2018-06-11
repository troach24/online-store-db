var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var inventoryRouter = require('./routes/inventory');
var buyRouter = require('./routes/buy')
var sellRouter = require('./routes/sell');
var cartRouter = require('./routes/cart');
var newItemRouter = require('./routes/new-item');

var app = express();

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
app.use('/buy', buyRouter);
app.use('/sell', sellRouter);
app.use('/cart', cartRouter);
app.use('/new-item', newItemRouter);

module.exports = app;
