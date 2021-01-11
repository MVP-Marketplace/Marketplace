const router = require('express').Router();
const {
  addProfile,
  getSpecificBuilderInfo,
  getAllBuilderInfo,
  updateBuilder,
  deleteOneBuilder,
} = require('../../controllers/Builders');

router.post('/profile', addProfile);
router.get('/profile/:id', getSpecificBuilderInfo);
router.get('/profiles', getAllBuilderInfo);
router.patch('/profile/:id', updateBuilder);
router.delete('/profile/:id', deleteOneBuilder);

module.exports = router;
