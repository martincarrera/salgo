const Controller = require('../../lib/controller');
const orderFacade = require('./order-facade');

class OrderController extends Controller {}

module.exports = new OrderController(orderFacade);
