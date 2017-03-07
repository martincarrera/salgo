const Model = require('../../lib/facade');
const backHelper = require('./back-helper');

const outFacade = require('../out/out-facade');

class BackModel extends Model {

  isBack(input) { // eslint-disable-line class-methods-use-this
    const list = backHelper.map(input);
    let text = '';
    const getOutPromise = outFacade.findOnePopulated({
      'createdBy.team.id': list.createdBy.team.id,
      'createdBy.channel.id': list.createdBy.channel.id,
      isActive: true,
    });
    const updateOutPromise = getOutPromise
    .then((out) => {
      const updatedOut = out;
      updatedOut.isActive = false;
      return outFacade.update({ _id: out.id }, updatedOut);
    });

    return Promise.all([getOutPromise, updateOutPromise])
    .then(([doc]) => {
      text = 'Hey!';
      const usersToNotify = Array.from(
        new Set(doc.orders.map(element => element.createdBy.user.name)));
      usersToNotify.forEach((user) => {
        text = `${text} @${user}, `;
      });
      text = `${text}hurry up! @${doc.createdBy.user.name} is back!`;
    })
    .then(() => ({
      response_type: 'in_channel',
      text,
    }));
  }

}

module.exports = new BackModel();
