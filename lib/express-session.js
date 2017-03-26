var env = process.env.NODE_ENV || 'development'
var config = require('../config/database.json')[env]
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session)

var sessionStore = new MySQLStore({
  host: config.host,
  port: 3306,
  user: config.username,
  password: config.password,
  database: config.database
})

module.exports = () => {
  if (!config.sessionSecret) {
    throw new Error('session secret must be config in "config/database.json"')
  }
  return session({
    key: 'express_login_session',
    secret: config.sessionSecret,
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  })
}
