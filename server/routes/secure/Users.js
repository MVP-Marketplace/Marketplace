const router = require('express').Router();
const { logoutUser, getSpecificUserInfo } = require('../../controllers/users');

router.post('/logout', logoutUser);
router.get('/:id', getSpecificUserInfo);

module.exports = router;
