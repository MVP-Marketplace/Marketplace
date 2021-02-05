const passport = require('passport'),
  mongoose = require('mongoose'),
  JwtStrategy = require('passport-jwt').Strategy,
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  User = require('../../db/models/user'),
  ExtractJwt = require('passport-jwt').ExtractJwt;

let jwtOptions = {
  jwtFromRequest: req => {
    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  'jwt',

  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...userData } = jwtPayload;

    userData = await User.findById(userData._id);

    return done(null, userData);
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      //this is a passport callback function
      //it checks if user already exists in the db with the given profile ID
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        await user.generateAuthToken();
        done(null, user);
      } else {
        const newUser = new User({
          googleId: profile.id,
          lastName: profile.name.familyName,
          firstName: profile.name.givenName,
          email: profile.emails[0].value,
        });
        await newUser.generateAuthToken();
        done(null, newUser);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  done(null, user);
});
module.exports = passport;
