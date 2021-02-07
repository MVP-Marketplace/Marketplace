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
      value: [
        {
          type: Number,
        },
      ],
      //REVIEW change owner to a better descriptor
      owner: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Rating',
        },
      ],
    },
    ratingAverage: {
      type: Number,
      default: null,
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
    level: {
      value: {
        type: String,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
      },
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

builderSchema.pre('save', async function () {
  const builder = this;
  if (builder.isModified('rating')) {
    builder.ratingAverage =
      (await builder.rating.value.reduce((a, b) => a + b)) /
      builder.rating.value.length;
  }
});

const Builder = mongoose.model('Builder', builderSchema);
module.exports = Builder;
