const Project = require('../db/models/Project');
const mongoose = require('mongoose');

//Create new project//
exports.createProject = async (req, res) => {
  try {
    const project = await new Project({
      ...req.body,
      owner: req.user._id,
    });
    await project.save();
    let user = req.user;
    user.ideas = user.ideas.concat(project._id);
    await user.save();
    res.status(200).send(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get specific project//
exports.getSpecificProject = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid project id');
  try {
    const project = await Project.findOne({ _id, owner: req.user._id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

//Get all projects in database//
exports.getAllProjects = async (__, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Make update to project//
exports.updateProject = async (req, res) => {
  const updates = Object.keys(req.body);
  if (updates.includes('owner')) {
    return res.status(400).send({ error: 'You cannot change the owner!' });
  }
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!project) return res.status(404).json({ error: 'project not found' });
    updates.forEach(update => (project[update] = req.body[update]));
    await project.save();
    res.json(project);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

//Delete project//
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!project)
      return res.status(404).json({ error: 'No such project exists' });
    res.status(200).json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
