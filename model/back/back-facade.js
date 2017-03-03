const Model = require('../../lib/facade');
const backSchema = require('./back-schema');

class BackModel extends Model {}

module.exports = new BackModel(backSchema);
