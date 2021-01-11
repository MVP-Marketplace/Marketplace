const Builder = require('../db/models/Builder');

exports.addProfile = async (req, res) => {
  console.log(req.user);
  try {
    console.log(req.body);
    const builder = await new Builder({
      ...req.body,
      owner: req.user._id,
    });
    await builder.save();
    res.status(200).send(builder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBuilderInfo = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not a valid task' });

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) return res.status(400).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
