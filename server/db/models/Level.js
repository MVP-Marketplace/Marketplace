const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Builder',
  },
  value: {
    type: String,
  },

  // entry: {
  //   owner_id: mongoose.Schema.Types.ObjectId,
  //   ref: 'Builder',
  //   value: 'Entry'
  // },
  // junior: {
  //   owner_id: mongoose.Schema.Types.ObjectId,
  //   ref: 'Builder',
  //   value: 'Junior'
  // },
  // mid: {
  //   owner_id: mongoose.Schema.Types.ObjectId,
  //   ref: 'Builder',
  //   value: 'Mid'
  // },
  // senior: {
  //   owner_id: mongoose.Schema.Types.ObjectId,
  //   ref: 'Builder',
  //   value: 'Senior'
  // }
});

const Level = mongoose.model('Level', levelSchema);
module.exports = Level;
