'use strict'
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: DataTypes.STRING,
    passwd: DataTypes.STRING,
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
