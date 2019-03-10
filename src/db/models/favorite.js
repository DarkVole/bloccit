'use strict';
module.exports = (sequelize, DataTypes) => {
    var Favorite = sequelize.define('Favorite', {
        userId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER
    }, {});
    Favorite.associate = function (models) {

        Favorite.addScope("lastFiveFor", (userId) => {
            Favorite.belongsTo(models.Post, {
                foreignKey: "postId",
                onDelete: "CASCADE"
            });

            Favorite.belongsTo(models.User, {
                foreignKey: "userId",
                onDelete: "CASCADE"
            });

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
