const Controller = require('../../lib/controller');
const orderFacade = require('./order-facade');

class OrderController extends Controller {

  createOrder(req, res, next) {
    this.facade.createOrder(req.body)
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        next(err);
      });
  }

}

module.exports = new OrderController(orderFacade);
