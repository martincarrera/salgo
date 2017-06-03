const Controller = require('../../lib/controller');
const backFacade = require('./back-facade');

class BackController extends Controller {
  isBack(req, res, next) {
    this.facade.isBack(req.body).then(doc => res.status(201).json(doc)).catch(err => next(err));
  }
}

module.exports = new BackController(backFacade);
