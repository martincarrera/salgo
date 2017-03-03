const Model = require('../../lib/facade');
const helpSchema = require('./help-schema');

class HelpModel extends Model {}

module.exports = new HelpModel(helpSchema);
