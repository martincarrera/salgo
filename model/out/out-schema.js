const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const outSchema = new Schema({
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

  isActive: {
    type: Boolean,
    default: true,
  },

  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

module.exports = mongoose.model('Out', outSchema);
