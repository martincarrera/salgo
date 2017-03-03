const Controller = require('../../lib/controller');
const tutorialFacade = require('./tutorial-facade');

class TutorialController extends Controller {}

module.exports = new TutorialController(tutorialFacade);
