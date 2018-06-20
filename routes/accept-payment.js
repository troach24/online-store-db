const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', (req, res) => {
  const token = req.body.stripeToken;
  const amount = req.body.amount * 100;
  console.log(req.body);
  
  return stripe.charges.create({
    amount,
    currency: 'USD',
    description: 'One stop shop',
    source: token,
  })
  .then(result => {
    console.log(result);
    res.json(result);
  })
  .catch(err => {
    const error = {
      message: err.message,
      failure_code: err.code || 500
    };
    res.json(error);
  });
});

module.exports = router;
