'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advert = sequelize.define('Advert', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  return Advert;
};