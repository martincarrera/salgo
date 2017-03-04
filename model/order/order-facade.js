const Model = require('../../lib/facade');
const orderSchema = require('./order-schema');
const orderHelper = require('./order-helper');

const outFacade = require('../out/out-facade');

class OrderModel extends Model {

  createOrder(input) {
    const order = orderHelper.map(input);
    const text = order.text.charAt(0).toUpperCase() + order.text.slice(1);
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
      out.orders.push(o);
      return outFacade.update({ _id: out.id }, out);
    })
    .then(() => ({
      response_type: 'in_channel',
      text: `Great! ${text} was added to the list.`,
    }));
  }

}

module.exports = new OrderModel(orderSchema);
