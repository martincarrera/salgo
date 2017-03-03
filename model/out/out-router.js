const controller = require('./out-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/')
  .post((...args) => controller.createFromSlack(...args));

module.exports = router;
