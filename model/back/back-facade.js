const Model = require('../../lib/facade');
const backHelper = require('./back-helper');

const outFacade = require('../out/out-facade');

class BackModel extends Model {

  isBack(input) { // eslint-disable-line class-methods-use-this
    const list = backHelper.map(input);
    let text = '';
    let responseType = 'in_channel';
    const getOutPromise = outFacade.findOnePopulated({
      'createdBy.team.id': list.createdBy.team.id,
      'createdBy.channel.id': list.createdBy.channel.id,
      isActive: true,
    });
    const updateOutPromise = getOutPromise
    .then((out) => {
      if (out) {
        const updatedOut = out;
        updatedOut.isActive = false;
        return outFacade.update({ _id: out.id }, updatedOut);
      }
      return Promise.resolve();
    });

    return Promise.all([getOutPromise, updateOutPromise])
    .then(([doc]) => {
      if (doc) {
        if (doc.orders.length > 0) {
          text = 'Hey!';
          const usersToNotify = Array.from(
            new Set(doc.orders.map(element => element.createdBy.user.name)));
          usersToNotify.forEach((user) => {
            text = `${text} @${user}, `;
          });
          text = `${text}hurry up!`;
        }
        text = `${text} @${doc.createdBy.user.name} is back!`;
        if (doc.orders.length > 0) {
          text = `${text} The final list was:`;
          doc.orders.forEach((element, index) => {
            text = `${text} \n ${index + 1}. *${element.text}* for ${element.createdBy.user.name}`;
          });
        }
      } else {
        text = 'Hey! Nobody was out! Are you going out? Just type `/out` to let everybody know!';
        responseType = 'ephemeral';
      }
    })
    .then(() => ({
      response_type: responseType,
      text,
    }));
  }

}

module.exports = new BackModel();
