const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
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
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    ideas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    isTeamLead: {
      type: Boolean,
      default: false,
    },
    linkedIn: {
      type: String,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);

userSchema.virtual('build-role', {
  ref: 'Builder',
  localField: '_id',
  foreignField: 'owner',
});

//DELETE METHOD to delete password and tokens from new user instance when it is passed back to the user.
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.pre('save', async function () {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);
});

//Create a token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: `${user.firstName} ${user.lastName}`,
    },

    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//Locate user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email }).populate('ideas');

  if (!user) throw new Error('User not found by email');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');
  return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
