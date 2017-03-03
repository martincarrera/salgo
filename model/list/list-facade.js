const Model = require('../../lib/facade');
const listSchema = require('./list-schema');

class ListModel extends Model {}

module.exports = new ListModel(listSchema);
