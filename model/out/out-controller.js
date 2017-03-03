const Controller = require('../../lib/controller');
const outFacade = require('./out-facade');

class OutController extends Controller {

  createFromSlack(req, res, next) {
    this.facade.createFromSlack(req.body)
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        next(err);
      });
  }

}

module.exports = new OutController(outFacade);
