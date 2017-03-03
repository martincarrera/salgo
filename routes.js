const Router = require('express').Router;

const router = new Router();

const out = require('./model/out/out-router');
const back = require('./model/back/back-router');
const order = require('./model/order/order-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to salgo API!' });
});

router.use('/order', order);
router.use('/out', out);
router.use('/back', back);


module.exports = router;
