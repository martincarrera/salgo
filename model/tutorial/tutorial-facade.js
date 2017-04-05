const Model = require('../../lib/facade');

class TutorialModel extends Model {

  showTutorial(input) { // eslint-disable-line
    const text = 'Insert tutorial here';
    return Promise.resolve()
      .then(() => ({
        text,
      }));
  }

}

module.exports = new TutorialModel();
