
const router = require('express').Router();
const UserTaskCOntroller = require('../controllers/UserTaskController')


router.post('/register', UserTaskCOntroller.addUser)
router.post('/assign', UserTaskCOntroller.addUserTask)
router.post('/unassign', UserTaskCOntroller.deleteUserTask)
router.get('/task/common', UserTaskCOntroller.findUserTask)




module.exports = router;