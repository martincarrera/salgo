const Controller = require('../../lib/controller');
const outFacade = require('./out-facade');

class OutController extends Controller {}

module.exports = new OutController(outFacade);
