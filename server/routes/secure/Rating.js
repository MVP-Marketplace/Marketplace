const router = require('express').Router();
const { createNewRating } = require('../../controllers/Ratings');

router.post('/:id', createNewRating);

module.exports = router;
