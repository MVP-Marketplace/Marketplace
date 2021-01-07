const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    extraFiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
    status: {
      type: String,
      trim: true,
      required: true,
      default: 'Stage 1',
    },
    projectLength: {
      type: String,
      trim: true,
    },
    hasDesigns: {
      type: Boolean,
      required: true,
    },
    hasProductManager: {
      type: Boolean,
      required: true,
    },
    oneSentenceDescription: {
      type: String,
      trim: true,
      required: true,
    },
    detailDescription: {
      type: String,
      trim: true,
    },
    importantFeatures: [
      {
        type: String,
        trim: true,
      },
    ],
    problemToSolve: {
      type: String,
      trim: true,
      required: true,
    },
    idealMarket: {
      type: String,
      trim: true,
    },
    goals: [
      {
        type: String,
        trim: true,
      },
    ],
    appFormat: {
      type: String,
      trim: true,
    },
  },
  {
    timestamp: true,
  }
);
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
