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
      text = 'This is the list for the current run:';
      doc.orders.forEach((element, index) => {
        text = `${text} \n ${index + 1}. *${element.text}* for ${element.createdBy.user.name}`;
      });
    })
    .then(() => ({ text }));
  }

}

module.exports = new ListModel();
