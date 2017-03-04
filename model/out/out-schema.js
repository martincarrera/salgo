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
    default: Date.now,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  items: [{
    type: String,
  }],

});


module.exports = mongoose.model('Out', outSchema);
