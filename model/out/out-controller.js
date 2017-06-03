const Controller = require('../../lib/controller');
const outFacade = require('./out-facade');

class OutController extends Controller {
  createOut(req, res, next) {
    this.facade.createOut(req.body).then(doc => res.status(201).json(doc)).catch(err => next(err));
  }
}

module.exports = new OutController(outFacade);
