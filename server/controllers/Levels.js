const Builder = require('../db/models/Builder');
const Level = require('../db/models/Level');
const mongoose = require('mongoose');

exports.createNewLevel = async (req, res) => {
  let levelArray = ['entry', 'junior', 'mid', 'senior'];

  if (!levelArray.includes(req.body.value.toLowerCase()))
    return res.status(400).send('Invalid Level');

  try {
    const level = await new Level({
      value: req.body.value.toLowerCase(),
      owner: req.params.id,
    });
    await level.save();
    let builder = await Builder.findOne({ _id: req.params.id });
    if (!builder) return res.status(400).json({ message: 'User Not Found' });

    builder.level.value = level.value;
    builder.level.owner = level._id;
    await builder.save();
    res.status(200).send(level);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateLevel = async (req, res) => {
  let levelArray = ['entry', 'junior', 'mid', 'senior'];
  let inputLevel = req.body.value.toLowerCase();

  if (!levelArray.includes(inputLevel))
    return res.status(400).send('Invalid Level');

  try {
    const level = await Level.findOne({
      _id: req.params.levelId,
    });
    if (!level) return res.status(404).json({ message: 'Info not found' });
    level.value = inputLevel;
    await level.save();

    let builder = await Builder.findOne({ _id: req.params.id });
    if (!builder) return res.status(400).json({ message: 'User Not Found' });
    builder.level.value = level.value;
    await builder.save();
    res.status(200).json(level);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllLevel = async (req, res) => {
  try {
    const level = await Level.find();
    if (!level)
      return res.status(400).json({ message: 'Nobody with that Level' });
    res.status(200).json(level);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSpecificLevel = async (req, res) => {
  let inputLevel = req.body.level.toLowerCase();
  try {
    const level = await Level.find({ value: inputLevel });
    if (!level)
      return res.status(400).json({ message: 'Nobody with that Level' });
    res.status(200).json(level);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
