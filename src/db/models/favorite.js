'use strict';
module.exports = (sequelize, DataTypes) => {
    var Favorite = sequelize.define('Favorite', {
        userId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER
    }, {});
    Favorite.associate = function (models) {
        // associations can be defined here

        Favorite.addScope("lastFiveFor", (userId) => {


            return {
                include: [{
                    model: models.Post
       }],
                where: {
                    userId: userId
                },

                limit: 5,
                order: [["createdAt", "DESC"]]
            }
        });
    };
    return Favorite;
};
