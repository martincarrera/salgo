const controller = require('./order-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/').post((...args) => controller.createOrder(...args));

module.exports = router;
