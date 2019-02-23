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
        // associations can be defined here
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

        Post.prototype.hasUpvoteFor = function (selectedUser) {

            let totalVotes = post.votes.length;
            console.log(post.votes.length);
            let result = false;

            for (i = 0; i < totalVotes - 1; i++) {

                if (post.votes[i].userId == selectedUser) {
                    if (post.votes[i].value = 1) {
                        result = true
                        break;
                    }
                }
            }

            return result;
        }

        Post.prototype.hasDownvoteFor = function (selectedUser) {

            let totalVotes = post.votes.length;
            console.log(post.votes.length);
            let result = false;

            for (i = 0; i < totalVotes - 1; i++) {

                if (post.votes[i].userId == selectedUser) {
                    if (post.votes[i].value = -1) {
                        result = true
                        break;
                    }
                }
            }

            return result;
        }

    };
    return Post;
};
