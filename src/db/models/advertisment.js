'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advertisment = sequelize.define('Advertisment', {
    source: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Advertisment.associate = function(models) {
    // associations can be defined here
  };
  return Advertisment;
};