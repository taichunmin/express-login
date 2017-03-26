var express = require('express')
var router = express.Router()
var db = require('../models')
var User = db.user

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

router.get('/new', (req, res) => {
  res.render('users/new', {
    title: '使用者註冊'
  })
})

router.all('/:id/:op?', (req, res, next) => {
  var id = req.params.id
  User.findById(id).then((user) => {
    if (user) {
      req.user = user
      next()
    } else {
      var err = new Error('cannot find user ' + id)
      err.status = 404
      next(err)
    }
  })
})

router.get('/:id', (req, res) => {
  res.render('users/show', {
    user: req.user
  })
})

router.get('/:id/edit', (req, res) => {
  res.render('users/edit', {
    user: req.user
  })
})

router.put('/:id/edit', (req, res) => {
  var user = req.body.user
  req.user.username = user.username
  req.user.passwd = user.passwd
  res.redirect('back')
})

module.exports = router
