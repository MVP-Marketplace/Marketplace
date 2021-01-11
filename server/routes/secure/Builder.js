const router = require('express').Router();
const { addProfile } = require('../../controllers/Builders');

router.post('/', addProfile);

module.exports = router;
