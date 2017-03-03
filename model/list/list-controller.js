const Controller = require('../../lib/controller');
const listFacade = require('./list-facade');

class ListController extends Controller {}

module.exports = new ListController(listFacade);
