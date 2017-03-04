const controller = require('./out-controller');
const Router = require('express').Router;

const router = new Router();

router.route('/')
  .post((...args) => controller.createOut(...args));

module.exports = router;
