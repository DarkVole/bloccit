'use strict';
module.exports = (sequelize, DataTypes) => {
  var advert = sequelize.define('advert', {
    source: DataTypes.STRING,
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
  advert.associate = function(models) {
    // associations can be defined here
    advert.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE",
     });
  };
  return advert;
};