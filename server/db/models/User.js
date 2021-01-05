//Methods/statics originally written for outdated Developer model.  Maybe usable for User model?

//DELETE METHOD to delete password and tokens from new user instance when it is passed back to the  user.
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
//Hash the password before saving user
//left out next() since using async/await
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
