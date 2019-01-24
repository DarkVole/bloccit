'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advertisment = sequelize.define('Advertisment', {
    source: DataTypes.STRING,
   title: DataTypes.STRING,
   description: DataTypes.STRING,
   topicId: {
     type: DataTypes.INTEGER,
     onDelete: "CASCADE",
     references: {
       model: "Topics",
       key: "id",
       as: "topicId",
     }
   }
  }, {});
  Advertisment.associate = function(models) {
    // associations can be defined here
    Advertisment.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE",
     });
  };
  return Advertisment;
};