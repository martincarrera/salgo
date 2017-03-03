const Controller = require('../../lib/controller');
const backFacade = require('./back-facade');

class BackController extends Controller {}

module.exports = new BackController(backFacade);
