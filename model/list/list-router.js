const controller = require('./list-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/').post((...args) => controller.showList(...args));

module.exports = router;
