'use strict';
module.exports = (sequelize, DataTypes) => {
    var Favorite = sequelize.define('Favorite', {
        userId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER
    }, {});
    Favorite.associate = function (models) {
        // associations can be defined here
    };


    Favorite.addScope("allFor", (userId) => {

        // #1
        return {
            include: [{
                model: models.Post
       }],
            where: {
                userId: userId  // Used for User Profile Favorites
            },
            order: [["createdAt", "DESC"]]
        }
    });

    return Favorite;
};
