const Post = require("./models").Post;
const Topic = require("./models").Topic;
const Authorizer = require("../policies/post");
const Comment = require("./models").Comment;
const User = require("./models").User;
const Vote = require("./models").Vote;
const Favorite = require("./models").Favorite;

module.exports = {

    getPost(id, callback) {
        // console.log(post.id.title);

        return Post.findById(id, {
                include: [
                    {
                        model: Comment,
                        as: "comments",
                        include: [
                            {
                                model: User
                            },

         ]
                    },
                    {
                        model: Vote,
                        as: "votes",

                    },
                    {
                        model: Favorite,
                        as: "favorites"
                    }
       ]

            })

            .then((post) => {
                callback(null, post);
                //console.log(post.votes.length);
            })

            .catch((err) => {
                callback(err);
            })

    },

    addPost(newPost, callback) {
        return Post.create(newPost)
            .then((post) => {
                callback(null, post);
            })
            .catch((err) => {
                callback(err);
            })
    },

    updatePost(req, updatedPost, callback) {

        return Post.findById(req.params.id)
            .then((post) => {

                if (!post) {
                    return callback("Post not found");
                }

                const authorized = new Authorizer(req.user, post).update();

                if (authorized) {

                    post.update(updatedPost, {
                            fields: Object.keys(updatedPost)
                        })
                        .then(() => {
                            callback(null, post);
                        })
                        .catch((err) => {
                            callback(err);
                        });

                } else {

                    req.flash("notice", "You are not authorized to do that.");
                    callback("Forbidden");
                }

            });
    },

    deletePost(req, callback) {

        return Post.findById(req.params.id)
            .then((post) => {

                const authorized = new Authorizer(req.user, post).destroy();

                if (authorized) {
                    post.destroy()
                        .then((res) => {
                            callback(null, post);
                        });

                } else {

                    req.flash("notice", "You are not authorized to do that.")
                    callback(401);
                }
            })
            .catch((err) => {
                callback(err);
            });
    },



    hasUpvoteFor(selectedUser) {

        let totalVotes = post.votes.length;
        //console.log(post.votes.length);
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
    },


    hasDownvoteFor(selectedUser) {

        let totalVotes = post.votes.length;
        //console.log(post.votes.length);
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
    },

}
