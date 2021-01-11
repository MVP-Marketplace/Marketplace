const router = require('express').Router();
const {
  addProfile,
  getSpecificBuilderInfo,
  getAllBuilderInfo,
  updateBuilder,
  deleteOneBuilder,
} = require('../../controllers/Builders');

router.post('/', addProfile);
router.get('/:id', getSpecificBuilderInfo);
router.get('/', getAllBuilderInfo);
router.patch('/:id', updateBuilder);
router.delete('/:id', deleteOneBuilder);

module.exports = router;
