'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};