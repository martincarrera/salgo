const Controller = require('../../lib/controller');
const salidaFacade = require('./salida-facade');

class SalidaController extends Controller {}

module.exports = new SalidaController(salidaFacade);
