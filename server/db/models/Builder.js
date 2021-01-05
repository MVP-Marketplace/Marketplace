const mongoose = require('mongoose');

const builderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    school: {
      type: String,
      trim: true,
    },
    technologies: [
      {
        type: String,
        required: true,
      },
    ],
    role: {
      type: String,
      required: true,
      trim: true,
    },
    specialty: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    level: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      trim: true,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    github: {
      type: String,
      trim: true,
      unique: true,
    },
    portfolio: {
      type: String,
      trim: true,
      unique: true,
    },

    remotePreference: {
      type: String,
      required: true,
      trim: true,
    },
    weeklyTimeCommitment: {
      type: String,
      required: true,
      trim: true,
    },
    projectLength: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Builder = mongoose.model('Builder', builderSchema);
module.exports = Builder;
