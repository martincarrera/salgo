const Model = require('../../lib/facade');
const salidaSchema = require('./salida-schema');

class SalidaModel extends Model {}

module.exports = new SalidaModel(salidaSchema);
