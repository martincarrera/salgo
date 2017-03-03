const Model = require('../../lib/facade');
const tutorialSchema = require('./tutorial-schema');

class TutorialModel extends Model {}

module.exports = new TutorialModel(tutorialSchema);
