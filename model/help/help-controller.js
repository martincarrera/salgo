const Controller = require('../../lib/controller');
const helpFacade = require('./help-facade');

class HelpController extends Controller {}

module.exports = new HelpController(helpFacade);
