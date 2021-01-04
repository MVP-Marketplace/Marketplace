const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const developerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    school: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
      unique: true,
    },
    github: {
      type: String,
      trim: true,
      unique: true,
    },
    teamLead: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
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
    technologies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Technology',
        required: true,
      },
    ],
    role: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      required: true,
      trim: true,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    rating: {
      type: Number,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
//DELETE METHOD to delete password and tokens from new developer instance when it is passed back to the developer user.
developerSchema.methods.toJSON = function () {
  const dev = this;
  const devObject = dev.toObject();
  delete devObject.password;
  delete devObject.tokens;
  return devObject;
};
//Hash the password before saving user
//left out next() since using async/await
developerSchema.pre('save', async function () {
  const dev = this;
  if (dev.isModified('password'))
    dev.password = await bcrypt.hash(dev.password, 8);
});

//Create a token

developerSchema.methods.generateAuthToken = async function () {
  const dev = this;
  const token = jwt.sign(
    {
      _id: dev._id.toString(),
      name: `${dev.firstName} ${dev.lastName}`,
    },

    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  dev.tokens = dev.tokens.concat({ token });
  await dev.save();
  return token;
};

//Locate developer by email and password
developerSchema.statics.findByCredentials = async (email, password) => {
  const dev = await Developer.findOne({ email })
    .populate('technologies')
    .populate('projects');
  if (!dev) throw new Error('Developer not found by email');
  const isMatch = await bcrypt.compare(password, dev.password);
  if (!isMatch) throw new Error('Invalid password');
  return dev;
};
const Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer;
