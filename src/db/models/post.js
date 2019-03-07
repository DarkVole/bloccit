'use strict';
module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        topicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    Post.associate = function (models) {
        // associations are defined below:
        
        Post.belongsTo(models.Topic, {
            foreignKey: "topicId",
            onDelete: "CASCADE"
        });

        Post.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });

        Post.hasMany(models.Comment, {
            foreignKey: "postId",
            as: "comments"
        });

        Post.hasMany(models.Favorite, {
            foreignKey: "postId",
            as: "favorites"
        });

        Post.afterCreate((post, callback) => {
            return models.Favorite.create({
                userId: post.userId,
                postId: post.id
            });
        });

        Post.hasMany(models.Vote, {
            foreignKey: "postId",
            as: "votes"
        });

        Post.prototype.getPoints = function () {

            // #1
            if (this.votes.length === 0) return 0

            // #2  This is a question for a mentor or Cory
            return this.votes
                .map((v) => {
                    return v.value
                })
                .reduce((prev, next) => {
                    return prev + next
                });
        };

        Post.prototype.hasUpvoteFor = function (usersID) {

            let testResult = false;
            let x = this.votes.length - 1;
            let j = 0;
            for (j = 0; j <= x; j++) {
                //console.log("Vote Value: " + this.votes[j].value + " User Id: " + this.votes[j].userId + " Post Id " + this.votes[j].postId + " Entered Id " + usersID)
                if (this.votes[j].value === 1 && this.votes[j].userId === usersID) {
                    testResult = true
                    break;
                };
            }
            //console.log(testResult);
            return testResult;

        };

        Post.prototype.hasDownvoteFor = function (usersID) {

            let x = this.votes.length - 1;
            let j = 0;
            for (j = 0; j <= x; j++) {

                if (this.votes[j].value === -1 && this.votes[j].userId === usersID) {
                    return true
                    break;
                };
            }
            return false;

        };

        Post.prototype.getFavoriteFor = function (userId) {
            return this.favorites.find((favorite) => {
                return favorite.userId == userId
            });
        };

        Post.addScope("lastFiveFor", (userId) => {

            return {
                where: {
                    userId: userId
                },
                limit: 5,
                order: [["createdAt", "DESC"]]
            }
        });

    }
    return Post;
};
