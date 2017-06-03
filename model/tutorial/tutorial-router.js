const controller = require('./tutorial-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/').post((...args) => controller.showTutorial(...args));

module.exports = router;
