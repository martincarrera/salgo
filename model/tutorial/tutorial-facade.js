const Model = require('../../lib/facade');

class TutorialModel extends Model {
  showTutorial(input) {
    const text = 'Insert tutorial here';
    return Promise.resolve().then(() => ({
      text,
    }));
  }
}

module.exports = new TutorialModel();
