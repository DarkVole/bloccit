'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Adverts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     title: {
        allowNull: false,
        type: Sequelize.STRING
      },
     description: {
        allowNull: false,
        type: Sequelize.STRING
      }
        
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Adverts');
  }
};