/* eslint class-methods-use-this: ["error", { "exceptMethods": ["showTutorial"] }] */

const Model = require('../../lib/facade');

class TutorialModel extends Model {
  showTutorial() {
    const text = 'Insert tutorial here';
    return Promise.resolve().then(() => ({
      text,
    }));
  }
}

module.exports = new TutorialModel();
