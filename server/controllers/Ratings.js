const Builder = require('../db/models/Builder');
const Rating = require('../db/models/Rating');
const mongoose = require('mongoose');

// CREATE NEW RATING //

exports.createNewRating = async (req, res) => {
  try {
    const rating = await new Rating({
      ...req.body,
      owner: req.user._id,
      ratee: req.params.id,
    });
    await rating.save();
    let ratee = await Builder.findOne({ _id: req.params.id });
    ratee.rating.value = ratee.rating.value.concat(rating.value);
    ratee.rating.owner = ratee.rating.owner.concat(rating._id);
    await ratee.save();
    res.status(200).send(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
