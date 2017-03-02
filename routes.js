const Router = require('express').Router;

const router = new Router();

const salida = require('./model/salida/salida-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to salgo API!' });
});

router.use('/salida', salida);


module.exports = router;
