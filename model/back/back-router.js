const controller = require('./back-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/').post((...args) => controller.isBack(...args));

module.exports = router;
