<<<<<<< Updated upstream:src/db/migrations/20190122162207-create-banner.js
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      description: {
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
   topicId: {
     type: Sequelize.INTEGER,
     onDelete: "CASCADE",
     references: {
       model: "Topics",
       key: "id",
       as: "topicId",
     },
   }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Banners');
  }
=======
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      description: {
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
   topicId: {
     type: Sequelize.INTEGER,
     onDelete: "CASCADE",
     references: {
       model: "Topics",
       key: "id",
       as: "topicId",
     },
   }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Banners');
  }
>>>>>>> Stashed changes:src/db/migrations/20190121011102-create-banner.js
};