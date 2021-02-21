const router = require('express').Router();
const passport = require('passport');

const { createUser, loginUser } = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);

module.exports = router;
