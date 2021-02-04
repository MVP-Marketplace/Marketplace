const Builder = require('../db/models/Builder');
const mongoose = require('mongoose');

//CREATE BUILDER PROFILE//

exports.addProfile = async (req, res) => {
  try {
    const builder = await new Builder({
      ...req.body,
      owner: req.user._id,
    });
    await builder.save();
    res.status(200).send(builder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //how to integrate on one table?
  // a way to stored the record id of airtable onto mongo
  //oh wait just add it into the db schema
};

//GET 'ALL' BUILDER PROFILES//

exports.getAllBuilderInfo = async (req, res) => {
  try {
    const builder = await Builder.find({ owner: req.user._id });
    if (!builder)
      return res.status(400).json({ message: 'User Info not found' });
    res.status(200).json(builder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET ONE BUILDER PROFILE//

exports.getSpecificBuilderInfo = async (req, res) => {
  const _id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not valid info' });

  try {
    const builder = await Builder.findOne({ _id, owner: req.user._id });
    if (!builder)
      return res.status(400).json({ message: 'User Info not found' });
    res.status(200).json(builder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE BUILDER PROFILE//

exports.updateBuilder = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'school',
    'technologies',
    'role',
    'specialty',
    'level',
    'rating',
    'github',
    'portfolio',
    'remotePreference',
    'weeklyTimeCommitment',
    'projectLength',
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const builder = await Builder.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!builder) return res.status(404).json({ message: 'Info not found' });
    updates.forEach(update => {
      if (
        update === 'technologies' ||
        update === 'specialty' ||
        update === 'projects'
      ) {
        return builder[update].push(...req.body[update]);
      } else {
        return (builder[update] = req.body[update]);
      }
    });
    await builder.save();
    res.status(200).json(builder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE ONE BUILDER PROFILE//

exports.deleteOneBuilder = async (req, res) => {
  try {
    const builder = await Builder.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!builder) return res.status(404).json({ message: 'Info not found' });
    res.status(200).json({ message: 'Info has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
