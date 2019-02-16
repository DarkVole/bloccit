const Post = require("./models").Post;
const Topic = require("./models").Topic;
const Authorizer = require("../policies/post");

module.exports = {
    getPost(id, callback) {
        return Post.findById(id)
            .then((post) => {
                callback(null, post);
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
                //console.log("***REACHED update in post Query and User ====> " + req.user)
                const authorized = new Authorizer(req.user, post).update();
                //console.log("*************Authorized?====> " + authorized)
                if (authorized) {
                    //console.log("*************Updated Post?====> " + updatedPost)
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


    /*   deletePost(id, callback){
        return Post.destroy({
          where: { id }
        })
        .then((deletedRecordsCount) => {
          callback(null, deletedRecordsCount);
        })
        .catch((err) => {
          callback(err);
        })
      }*/

    deletePost(req, callback) {

        return Post.findById(req.params.id)
            .then((post) => {

                const authorized = new Authorizer(req.user, post).destroy();
console.log("**********Aurthorized? "+ authorized + "User Object " + req.user )
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
    }
}
