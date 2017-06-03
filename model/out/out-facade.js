const Model = require('../../lib/facade');
const outSchema = require('./out-schema');
const outHelper = require('./out-helper');

class OutModel extends Model {
  createOut(input) {
    const out = outHelper.map(input);
    const text = out.createdBy.user.name;
    return this.findOnePopulated({
      'createdBy.team.id': out.createdBy.team.id,
      'createdBy.channel.id': out.createdBy.channel.id,
      isActive: true,
    }).then((doc) => {
      if (doc) {
        return {
          response_type: 'in_channel',
          text: `${doc.createdBy.user.name} is already out! If it's not right, just type \`/back\`. If you want something, just type \`/order [item]\`.`,
        };
      }
      return this.Schema(out).save().then(() => ({
        response_type: 'in_channel',
        text: `:speaking_head_in_silhouette: ${text} is going out! :runner: \nLet him/her know what you want with \`/order [item]\`.`,
      }));
    });
  }

  findOnePopulated(query) {
    return this.Schema
      .findOne(query)
      .populate({
        path: 'orders',
      })
      .exec();
  }
}

module.exports = new OutModel(outSchema);
