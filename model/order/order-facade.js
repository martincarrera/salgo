const Model = require('../../lib/facade');
const orderSchema = require('./order-schema');
const orderHelper = require('./order-helper');

const outFacade = require('../out/out-facade');

class OrderModel extends Model {

  createOrder(input) {
    const order = orderHelper.map(input);
    let text = order.text.charAt(0).toUpperCase() + order.text.slice(1);
    let responseType = 'in_channel';
    const outPromise = outFacade.findOne({
      'createdBy.team.id': order.createdBy.team.id,
      'createdBy.channel.id': order.createdBy.channel.id,
      isActive: true,
    });
    const orderPromise = outPromise.then((out) => {
      if (out) {
        return this.Schema(order).save();
      }
      return Promise.resolve();
    });

    return Promise.all([outPromise, orderPromise])
    .then(([out, o]) => {
      if (out) {
        out.orders.push(o);
        text = `Great! ${text} was added to the list.`;
        return outFacade.update({ _id: out.id }, out);
      }
      responseType = 'ephemeral';
      text = 'Ups! Nobody is out! Are you going out? Just type `/out` to let everybody know!';
      return Promise.resolve();
    })
    .then(() => ({
      response_type: responseType,
      text,
    }));
  }

}

module.exports = new OrderModel(orderSchema);
