const Skill = require('../models/skill')

module.exports = {
  index,
  show,
  new: newSkill,
  create
}

function create(req, res) {
  res.redirect('/skills')
  Skill.create(req.body)
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' })
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  })
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.number)
  })
}
