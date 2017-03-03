const Model = require('../../lib/facade');
const outSchema = require('./out-schema');

class OutModel extends Model {

  static createFromSlack(input) {
    console.log(input); // eslint-disable-line no-console
    return Promise.resolve({
      text: ':speaking_head_in_silhouette: Someone is going out! :runner: \nLet them know what you want with `/order [item]`.',
    });
  }

}

module.exports = new OutModel(outSchema);
