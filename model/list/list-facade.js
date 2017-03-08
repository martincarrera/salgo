const Model = require('../../lib/facade');
const listHelper = require('./list-helper');

const outFacade = require('../out/out-facade');

class ListModel extends Model {

  showList(input) { // eslint-disable-line class-methods-use-this
    const list = listHelper.map(input);
    let text = '';
    return outFacade.findOnePopulated({
      'createdBy.team.id': list.createdBy.team.id,
      'createdBy.channel.id': list.createdBy.channel.id,
      isActive: true,
    })
    .then((doc) => {
      if (doc) {
        if (doc.orders.length > 0) {
          text = 'This is the current list:';
          doc.orders.forEach((element, index) => {
            text = `${text} \n ${index + 1}. *${element.text}* for ${element.createdBy.user.name}`;
          });
        } else {
          text = 'The list is empty! Want to order something? Just type `/order [item]`';
        }
      } else {
        text = 'There is nobody out! Are you going out? Just type `/out` to let everybody know!';
      }
    })
    .then(() => ({ text }));
  }

}

module.exports = new ListModel();
