const router = require('express').Router();
const passport = require('passport');

//Initializes the google login procedure
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
//After initiating login, response sends cookie w/jwt and redirects in the browser
router.get(
  '/google-redirect',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
  (req, res) => {
    res.cookie('jwt', req.user.tokens[0].token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true,
    });
    //This redirect will change based on our FE routes
    res.redirect(`http://localhost:3000/profile`);
  }
);

module.exports = router;
