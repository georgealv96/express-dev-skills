var express = require('express')
var router = express.Router()

// Require the controller that exports Skill CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
// GET /skills/new
router.get('/new', skillsCtrl.new)
// GET /skills/:number
router.get('/:number', skillsCtrl.show)
// POST /skills
router.post('/', skillsCtrl.create)

module.exports = router
