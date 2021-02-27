const User = require('../db/models/user');
const Projects = '../db/models/projects';

const isEmpty = value => {
  return !value;
};

let Airtable = require('airtable');

let base = new Airtable({ apiKey: process.env.AIR_TABLE_KEY }).base(
  'appIazMBD5VrlWGe5'
);

//Create a new user//

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, linkedIn } = req.body;
  let airtableID;

  airtable = await base('From Mongo DB').create(
    [
      {
        fields: {
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        airtableID = record.getId();
        return airtableID;
      });
    }
  );

  console.log(airtableID);

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      airtableID,
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

    //make call to airtable table by with email and pull that row in that table a
    base('profile info').find('recsBBXXJZXQKnEpC', function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record);
    });

    //concatenate to user

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
