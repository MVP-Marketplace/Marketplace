const User = require('../db/models/user');

const isEmpty = value => {
  return !value;
};

//Create a new user//

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, linkedIn } = req.body;
  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      linkedIn,
    });
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//LOGIN USER//

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

////////// FOR SECURE ROUTES /////////////////

exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'User has been logged out' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
