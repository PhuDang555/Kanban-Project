var router = require('express').Router()
/**
 * Normalize a port into a number, string, or false.
 */
router.use('/auth', require('./auth'))
router.use('/boards', require('./board'))
router.use('/boards/:boardId/sections', require('./section'))
router.use('/boards/:boardId/tasks', require('./task'))

module.exports = router;
