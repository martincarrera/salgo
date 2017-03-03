const Model = require('../../lib/facade');
const outSchema = require('./out-schema');

class OutModel extends Model {}

module.exports = new OutModel(outSchema);
