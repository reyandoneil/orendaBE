
const router = require('express').Router();
const UserTaskRouter = require('./UserTaskRouter')

router.use('/api', UserTaskRouter);

module.exports = router;