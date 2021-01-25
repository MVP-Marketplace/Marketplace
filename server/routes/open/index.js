const router = require('express').Router();
const passport = require('passport');
const {
  createUser,
  loginUser,
  loginWithGoogle,
} = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/login-google', loginWithGoogle);
router.get(
  '/google-redirect',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
  (req, res) => {
    console.log(req.user, 'in open routes');
    res.redirect(`/api/users/${req.user.id}`);
  }
);

module.exports = router;
