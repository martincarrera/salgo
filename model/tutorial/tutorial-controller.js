const Controller = require('../../lib/controller');
const tutorialFacade = require('./tutorial-facade');

class TutorialController extends Controller {
  showTutorial(req, res, next) {
    this.facade.showTutorial().then(doc => res.status(201).json(doc)).catch(err => next(err));
  }
}

module.exports = new TutorialController(tutorialFacade);
