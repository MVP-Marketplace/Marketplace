const router = require('express').Router(),
  {
    createProject,
    getSpecificProject,
    getAllProjects,
    updateProject,
    deleteProject,
  } = require('../../controllers/Projects');

router.post('/', createProject);
router.get('/:id', getSpecificProject);
router.get('/', getAllProjects);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
