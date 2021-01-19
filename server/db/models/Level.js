const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Builder',
  },
  value: {
    type: String,
  },
});

const Level = mongoose.model('Level', levelSchema);
module.exports = Level;
