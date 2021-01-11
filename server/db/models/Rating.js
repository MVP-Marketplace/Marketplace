const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  value: {
    type: Number,
  },
  project: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  ratee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Builder',
    },
  ],
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
