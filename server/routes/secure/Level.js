const router = require('express').Router();
const {
  createNewLevel,
  getSpecificLevel,
  updateLevel,
  getAllLevel,
} = require('../../controllers/Levels');

router.post('/:id', createNewLevel);
router.get('/one', getSpecificLevel);
router.get('/', getAllLevel);
router.patch('/:id/:levelId', updateLevel);

module.exports = router;
