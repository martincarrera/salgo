const Controller = require('../../lib/controller');
const listFacade = require('./list-facade');

class ListController extends Controller {
  showList(req, res, next) {
    this.facade.showList(req.body).then(doc => res.status(201).json(doc)).catch(err => next(err));
  }
}

module.exports = new ListController(listFacade);
