const Model = require('../../lib/facade');
const outSchema = require('./out-schema');
const outHelper = require('./out-helper');

class OutModel extends Model {

  createOut(input) { // eslint-disable-line class-methods-use-this
    const out = outHelper.map(input);
    return Promise.resolve(this.Schema(out).save()).then(() => ({
      response_type: 'in_channel',
      text: ':speaking_head_in_silhouette: Someone is going out! :runner: \nLet them know what you want with `/order [item]`.',
    }));
  }

}

module.exports = new OutModel(outSchema);
