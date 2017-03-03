const Model = require('../../lib/facade');
const orderSchema = require('./order-schema');

class OrderModel extends Model {}

module.exports = new OrderModel(orderSchema);
