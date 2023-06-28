var express = require('express')
var router = express.Router()

// Require the controller that exports Skill CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)

router.get('/:number', skillsCtrl.show)

module.exports = router
