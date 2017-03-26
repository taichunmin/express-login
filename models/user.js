'use strict'

var bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: DataTypes.STRING,
    passwd: {
      type: DataTypes.STRING,
      set (val) {
        this.setDataValue('passwd', bcrypt.hashSync(val, saltRounds))
      }
    },
    facebook: DataTypes.STRING,
    facebook_data: DataTypes.TEXT,
    google: DataTypes.STRING,
    google_data: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return User
}
