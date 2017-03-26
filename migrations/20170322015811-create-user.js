'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      passwd: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      facebook_data: {
        type: Sequelize.TEXT
      },
      google: {
        type: Sequelize.STRING
      },
      google_data: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
}
