const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

  createdBy: {
    team: {
      id: String,
      domain: String,
    },
    channel: {
      id: String,
      name: String,
    },
    user: {
      id: String,
      name: String,
    },
  },

  createdAt: {
    type: Date,
    expires: 604800,
    default: Date.now,
  },

  text: {
    type: String,
    required: true,
  },

});


module.exports = mongoose.model('Order', orderSchema);
