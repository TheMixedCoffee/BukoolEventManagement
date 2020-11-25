'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("test",{
      id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.BIGINT
      },
      data:{
        type: Sequelize.STRING
      },
      value:{
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("test");
  }
};
